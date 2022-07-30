#pragma once

#include "../algorithm/sorted_container_operating.h"
#include "../memery_management/memery_pool.h"
#include "search_tree.h"
#include "vector.h"

namespace data_structure {
/*
 *每一个节点最多有 m 个子节点 m>=3
 *每一个非叶子节点（除根节点）最少有 ⌈m/2⌉ 个子节点 ⌈m/2⌉>=2
 *如果根节点不是叶子节点，那么它至少有两个子节点
 *有 k 个子节点的非叶子节点拥有 k − 1 个键
 *所有的叶子节点都在同一层
 * */
template <class T, int N>  // 每个节点最多存N-1个key 最少(N+1)/2-1个key
class b_tree : public search_tree<T> {
  struct node {
    vector<T> key;
    vector<node*> son;
  };
  memery_pool<node> pool;
  node* root = nullptr;

  void copy_self(node*& rt, node* cp) {
    if (cp == nullptr) return;
    rt = pool.get();
    rt->key = cp->key;
    rt->son = cp->son;
    for (int i = 0; i < cp->son.size(); i++) copy_self(rt->son[i], cp->son[i]);
  }
  void delete_self(node* rt) {
    if (rt == nullptr) return;
    for (int i = 0; i < rt->son.size(); i++) delete_self(rt->son[i]);
    pool.erase(rt);
  }

  bool leaf(node*& rt) { return rt->son.empty(); }
  // 把一个值插入到B树中，
  // rt 为当前子树
  // w 为待插入的值
  // fa 为当前子树的父亲
  // fap为父亲指向儿子的指针的下标
  void insert(node*& rt, const T& w, node* fa = nullptr, int fap = 0) {
    using namespace algorithm;
    if (rt == nullptr) {  // empty tree
      rt = pool.get();
      rt->key.push_back(w);
      return;
    }
    // 二分找到插入的位置，p
    int p = lower_bound(rt->key.begin(), rt->key.end(), w) - rt->key.begin();
    // 发现w值已经出现在了树里面，我们直接忽视这次插入
    if (p != rt->key.size() && rt->key[p] == w) return;
    // 如果我们对一个叶子进行插入w,就直接放进去，准备调整
    if (leaf(rt)) rt->key.insert(rt->key.begin() + p, w);
    // 如果不是叶子，根据特性，有w<key[p],如果p!=0,还有w>key[p-1]
    // 这时候递归向下最好了
    else
      insert(rt->son[p], w, rt, p);
    // 这一步我们开始调整树在插入值以后的非法状态，
    if (rt->key.size() > N - 1) {
      // 如果rt是根，那么树的高度必须要增加了,另外，fa这时候是nullptr，我们要给他新开一个
      if (rt == root) {
        fa = pool.get();
        fa->son.reserve(N + 1);
        fa->son.push_back(rt);
        fap = 0;
      }
      // 到这一步的时候，rt必然有父亲,我们打算在这一步将rt分裂
      node* nw = pool.get();
      nw->son.reserve(N + 1);
      // 把最中间的值拿给父亲// 把新的儿子放入父亲
      fa->key.insert(fa->key.begin() + fap, *(rt->key.begin() + N / 2));
      fa->son.insert(fa->son.begin() + fap + 1, nw);
      // 把自己的一部分键分给兄弟, 儿子也要分
      nw->key.insert(nw->key.end(), rt->key.begin() + N / 2 + 1, rt->key.end());
      rt->key.erase(rt->key.begin() + N / 2, rt->key.end());
      if (!leaf(rt)) {
        nw->son.insert(nw->son.end(), rt->son.begin() + N / 2 + 1,
                       rt->son.end());
        rt->son.erase(rt->son.begin() + N / 2 + 1, rt->son.end());
      }
      //最后把根修改一下即可。
      if (rt == root) rt = fa;
    }
  }
  node*& search(node*& rt, const T& w) {
    using namespace algorithm;
    if (rt == nullptr) return rt;
    int p = lower_bound(rt->key.begin(), rt->key.end(), w) - rt->key.begin();
    if (rt->key[p] == w) return rt;
    if (leaf(rt)) return nullptr;
    return search(rt->son[p], w);
  }
  //这里将两个儿子合并为一个,千万要注意这个函数很危险，他将改变父亲的指针
  void merge(node* rt, int l, int r) {
    node *ls = rt->son[l], *rs = rt->son[r];
    ls->key.insert(ls->key.end(), rt->key[l]);
    ls->key.insert(ls->key.end(), rs->key.begin(), rs->key.end());
    rt->key.erase(rt->key.begin() + l);
    if (!leaf(rt->son[0]))
      ls->son.insert(ls->son.end(), rs->son.begin(), rs->son.end());
    pool.erase(rt->son[r]);
    rt->son.erase(rt->son.begin() + r);
    if (rt == root && rt->key.empty()) {
      root = rt->son[0];
      pool.erase(rt);
    }
  }
  void erase(node*& rt, const T& w, node* fa = nullptr, int fap = 0) {
    using namespace algorithm;
    if (rt == nullptr) return;
    int p = lower_bound(rt->key.begin(), rt->key.end(), w) - rt->key.begin();
    if (leaf(rt)) {
      if (p < rt->key.size() && rt->key[p] == w)
        rt->key.erase(rt->key.begin() + p);
    } else {
      if (p < rt->key.size() && rt->key[p] == w) {
        node* pre = rt->son[p];
        while (!leaf(pre)) pre = pre->son.back();
        std::swap(rt->key[p], pre->key.back());
      }
      erase(rt->son[p], w, rt, p);
    }
    if (rt != root && rt->key.size() < (N - 1) / 2) {  // size=(N-1/2)-1
      if (fap >= 1) {                                  // left brother
        node*& br = fa->son[fap - 1];
        if (br->key.size() > (N - 1) / 2) {  // has enough key
          // 从左边向右边运输一个键
          rt->key.insert(rt->key.begin(), fa->key[fap - 1]);
          fa->key[fap - 1] = br->key.back();
          br->key.pop_back();
          // 儿子也传过去
          if (!leaf(rt)) {
            rt->son.insert(rt->son.begin(), br->son.back());
            br->son.pop_back();
          }
        } else {
          merge(fa, fap - 1, fap);
        }
      } else {
        node*& br = fa->son[fap + 1];
        if (br->key.size() > (N - 1) / 2) {
          rt->key.push_back(fa->key[fap]);
          fa->key[fap] = br->key.front();
          br->key.erase(br->key.begin());
          if (!leaf(rt)) {
            rt->son.push_back(br->son.front());
            br->son.erase(br->son.begin());
          }
        } else {
          merge(fa, fap, fap + 1);
        }
      }
    }
  }
  void preorder(node*& rt, void (*f)(const T&)) {
    if (rt == nullptr) return;
  }
  void midorder(node*& rt, void (*f)(const T&), int x = 0) {
    if (rt == nullptr) return;
    // cout << "(" << rt->key.size() << " " << rt->son.size() << ")" << endl;
    for (int i = 0; i < rt->key.size(); i++) {
      if (!rt->son.empty()) {
        assert(rt->key.size() + 1 == rt->son.size());
        midorder(rt->son[i], f, x + 1);
      }
      f(rt->key[i]);
    }
    if (!rt->son.empty()) midorder(rt->son.back(), f, x + 1);
  }

 public:
  // 构造函数和析构函数
  b_tree() { root = nullptr; }
  b_tree(const b_tree<T, N>& rhs) { copy_self(root, rhs.root); }
  b_tree<T, N> operator=(const b_tree<T, N>& rhs) {
    delete_self(root);
    copy_self(root, rhs.root);
    return *this;
  }
  ~b_tree() { delete_self(root); }

  //普通操作
  void insert(const T& w) { insert(root, w); }
  node*& search(const T& w) { return search(root, w); }
  void erase(const T& w) { erase(root, w); }
  void preorder(void (*f)(const T&)) { preorder(root, f); }
  void midorder(void (*f)(const T&)) { midorder(root, f); }
};
}  // namespace data_structure
