#pragma once

#include "../algorithm/general.h"
#include "../memery_management/memery_pool.h"
#include "search_tree.h"

namespace data_structure {
template <class T>
class red_black_tree : public search_tree<T> {
  enum colortype { red, black };
  struct node {
    node *ch[2], *fa;
    colortype color;
    T key;
  };
  memery_pool<node> pool;
  node* root;

  void copy_self(node*& rt, node* fa, node* cp) {
    if (cp == nullptr) return;
    rt = pool.get();
    rt->key = cp->key;
    rt->color = cp->color;
    rt->fa = fa;
    copy_self(rt->ch[0], rt, cp->ch[0]);
    copy_self(rt->ch[1], rt, cp->ch[1]);
  }
  void delete_self(node* rt) {
    if (rt == nullptr) return;
    delete_self(rt->ch[0]);
    delete_self(rt->ch[1]);
    pool.erase(rt);
  }
  node* newnode(const T& w, node* fa) {
    node* res = pool.get();
    res->ch[0] = res->ch[1] = nullptr;
    res->fa = fa;
    res->color = red;
    res->key = w;
    return res;
  }
  void rotate(node* son) {  // 把son旋转成为根
    assert(son != nullptr);
    node* fa = son->fa;
    if (fa == root) root = son;
    assert(fa != nullptr);
    node* gr = fa->fa;
    int sonis = fa->ch[1] == son;
    son->fa = gr;
    fa->fa = son;
    if (son->ch[sonis ^ 1] != nullptr) son->ch[sonis ^ 1]->fa = fa;
    if (gr != nullptr) gr->ch[gr->ch[1] == fa] = son;
    fa->ch[sonis] = son->ch[sonis ^ 1];
    son->ch[sonis ^ 1] = fa;
  }
  node*& search(node*& rt, const T& w) {
    if (rt == nullptr)
      return rt;
    else if (w < rt->key)
      return search(rt->ch[0], w);
    else if (rt->key < w)
      return search(rt->ch[1], w);
    else
      return rt;
  }
  void insert_adjust(node* son) {
    // assert(son->color==red and father-> color==red)
    // if father is red , then rt must have a grandfather
    // what's more, it's grandfather must be black
    node* fa = son->fa;                  // father
    node* gr = fa->fa;                   // grandfather
    node* un = gr->ch[fa != gr->ch[1]];  // uncle
    if (un != nullptr && un->color == red) {
      // son,father and uncle is red they make up a 4-key-node with
      // grandfather in 2-3-4 tree, if we find a 4-key-node we need split this
      // node a simple way to solve it is throw out grandfather
      fa->color = un->color = black;
      gr->color = red;
      if (gr == root)
        gr->color = black;  // the tree's hight is grow up
      else if (gr->fa->color == red)
        insert_adjust(gr);
    } else {
      // son,father is red they make up a 3-key-node with grandfather
      // in 2-3-4 tree, if we find a 3-key-node we don't need do anything
      // but in red-black-tree , we need rotate to avoid red son and red
      // father
      if ((son == fa->ch[0]) != (fa == gr->ch[0])) {
        rotate(son);
        son = fa;
        fa = son->fa;
      }
      fa->color = black;
      gr->color = red;
      if (gr == root) root = fa;
      rotate(fa);
    }
  }
  void insert(node*& rt, const T& w, node* fa) {
    if (rt == nullptr) {
      rt = newnode(w, fa);
      if (rt == root)
        rt->color = black;
      else if (rt->fa->color == red)  // 如果rt不是根那么fa存在
        insert_adjust(rt);
    } else if (w < rt->key) {
      insert(rt->ch[0], w, rt);
    } else if (rt->key < w) {
      insert(rt->ch[1], w, rt);
    }
  }
  void double_black(node* rt) {
    if (rt == root) {
      //根节点的重黑色，就是普通黑色，这让树高变小， do nothing
    } else if (rt->color == red) {
      // 红色节点的重黑色，就是普通黑色,意味着在234树上的一个 2-key-node 或
      // 3-key-node 将自己的某个键下移，让他的儿子合并这让树高保持不变
      rt->color = black;
    } else {
      // 黑色非根节点的重黑色，
      node* fa = rt->fa;
      int rt_is = rt == fa->ch[1];
      node* br = fa->ch[!rt_is];
      //先做一步微调，保证brother是黑色
      if (br->color == red) {
        // 这时brother、father是一个2-key-node,
        // 旋转brother，让那个新的brother变成black
        algorithm::swap(br->color, fa->color);
        rotate(br);
        fa = rt->fa;
        br = fa->ch[!rt_is];
      }
      // 对于2-3-4树 ， 此时分两类讨论，
      if ((br->ch[0] == nullptr || br->ch[0]->color == black) &&
          (br->ch[1] == nullptr || br->ch[1]->color == black)) {
        // 若brother是一个1-key-node 我们直接合并这两个节点，并将重黑上移
        br->color = red;
        double_black(fa);
      } else {
        // 否则brother不是1-key-node
        // 我们可以对应到234树上的从brother借一个key过来
        // 这需要对应方向上为红色 若为黑则调整
        if (br->ch[rt_is] == nullptr || br->ch[rt_is]->color == black) {
          algorithm::swap(br->ch[!rt_is]->color, br->color);
          rotate(br->ch[!rt_is]);
          br = fa->ch[!rt_is];
        }
        node* r = br->ch[rt_is];
        if (r != nullptr) r->color = fa->color;
        fa->color = black;
        rotate(r);
        rotate(r);
      }
    }
  }
  void erase(node*& rt, const T& w) {
    if (rt == nullptr) {
      return;
    } else if (w < rt->key) {
      erase(rt->ch[0], w);
    } else if (rt->key < w) {
      erase(rt->ch[1], w);
    } else {
      if (rt->ch[0] != nullptr) {
        node* tmp = rt->ch[0];
        while (tmp->ch[1] != nullptr) tmp = tmp->ch[1];
        erase(rt->ch[0], rt->key = tmp->key);
      } else if (rt->ch[1] != nullptr) {
        node* tmp = rt->ch[1];
        while (tmp->ch[0] != nullptr) tmp = tmp->ch[0];
        erase(rt->ch[1], rt->key = tmp->key);
      } else {
        double_black(rt);
        pool.erase(rt);
        rt = nullptr;
      }
    }
  }
  void preorder(node*& rt, void (*f)(const T&)) {
    if (rt == nullptr) return;
    f(rt->key);
    preorder(rt->ch[0], f);
    preorder(rt->ch[1], f);
  }
  void midorder(node*& rt, void (*f)(const T&)) {
    if (rt == nullptr) return;
    midorder(rt->ch[0], f);
    f(rt->key);
    midorder(rt->ch[1], f);
  }
  int hight() { return hight(root); }
  int hight(node* rt) {
    using namespace algorithm;
    if (rt == nullptr) return 0;
    return 1 + max(hight(rt->ch[0]), hight(rt->ch[1]));
  }

 public:
  // 构造函数和析构函数
  red_black_tree() { root = nullptr; }
  red_black_tree(const red_black_tree<T>& rhs) {
    copy_self(root, nullptr, rhs.root);
  }
  red_black_tree<T> operator=(const red_black_tree<T>& rhs) {
    delete_self(root);
    copy_self(root, nullptr, rhs.root);
    return *this;
  }
  ~red_black_tree() { delete_self(root); }

  void insert(const T& w) { insert(root, w, nullptr); }
  node*& search(const T& w) { return search(root, w); }
  void erase(const T& w) { erase(root, w); }
  void preorder(void (*f)(const T&)) { preorder(root, f); }
  void midorder(void (*f)(const T&)) { midorder(root, f); }
};

}  // namespace data_structure
