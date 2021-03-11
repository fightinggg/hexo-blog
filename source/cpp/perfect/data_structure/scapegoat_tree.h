#pragma once
#include "../memery_management/memery_pool.h"
#include "search_tree.h"
#include "vector.h"

namespace data_structure {
template <class T>
class scapegoat_tree : public search_tree<T> {
  struct node {
    node *ls, *rs;
    int siz, scapegoat;
    T key;
  };
  static const double alpha;
  memery_pool<node> pool;
  node* root = nullptr;
  void copy_self(node*& rt, node* cp) {
    if (cp == nullptr) return;
    rt = pool.get();
    *rt = *cp;
    copy_self(rt->ls, cp->ls);
    copy_self(rt->rs, cp->rs);
  }
  void delete_self(node* rt) {
    if (rt == nullptr) return;
    delete_self(rt->ls);
    delete_self(rt->rs);
    pool.erase(rt);
  }
  node* newnode(const T& w) {
    node* res = pool.get();
    res->ls = res->rs = nullptr;
    res->key = w;
    res->siz = 1;
    res->scapegoat = 0;
    return res;
  }
  void make_list(node* rt, vector<node*>& array) {
    if (rt == nullptr) return;
    make_list(rt->ls, array);
    if (!rt->scapegoat) array.push_back(rt);
    make_list(rt->rs, array);
    if (rt->scapegoat) pool.erase(rt);
  }
  void build_dfs(node*& rt, vector<node*>& array, int l, int r) {
    if (l > r) {
      rt = nullptr;
      return;
    }
    int mid = l + r >> 1;
    rt = array[mid];
    build_dfs(rt->ls, array, l, mid - 1);
    build_dfs(rt->rs, array, mid + 1, r);
    maintain(rt);
  }
  void rebuild(node*& rt) {
    vector<node*> array;
    make_list(rt, array);
    build_dfs(rt, array, 0, array.size() - 1);
  }
  void maintain(node*& rt) {
    int lsiz = rt->ls == nullptr ? 0 : rt->ls->siz;
    int rsiz = rt->rs == nullptr ? 0 : rt->rs->siz;
    rt->siz = lsiz + rsiz + 1;
    if (rt->scapegoat) rt->siz--;
    static node** prt = nullptr;  //记录路径上离根最近的不平衡的子树
    if (lsiz > alpha * rt->siz || rsiz > alpha * rt->siz) prt = &rt;
    if (rt == root && prt != nullptr) {
      node** tem = prt;
      prt = nullptr;
      rebuild(*tem);
    }
  }
  void insert(node*& rt, const T& w) {
    if (rt == nullptr)
      rt = newnode(w);
    else if (w < rt->key)
      insert(rt->ls, w);
    else if (rt->key < w)
      insert(rt->rs, w);
    else if (rt->scapegoat) {
      rt->scapegoat = 0;
    }
    maintain(rt);
  }
  node*& search(node*& rt, const T& w) {}
  void erase(node*& rt, const T& w) {
    if (rt == nullptr) {
      return;
    } else if (w < rt->key) {
      erase(rt->ls, w);
    } else if (rt->key < w) {
      erase(rt->rs, w);
    } else {
      rt->scapegoat = 1;
    }
    maintain(rt);
  }
  void preorder(node*& rt, void (*f)(const T&)) {
    if (rt == nullptr) return;
    if (!rt->scapegoat) f(rt->key);
    preorder(rt->ls, f);
    preorder(rt->rs, f);
  }
  void midorder(node*& rt, void (*f)(const T&)) {
    if (rt == nullptr) return;
    midorder(rt->ls, f);
    if (!rt->scapegoat) f(rt->key);
    midorder(rt->rs, f);
  }

 public:
  // 构造函数和析构函数
  scapegoat_tree() { root = nullptr; }
  scapegoat_tree(const scapegoat_tree<T>& rhs) { copy_self(root, rhs.root); }
  scapegoat_tree<T> operator=(const scapegoat_tree<T>& rhs) {
    delete_self(root);
    copy_self(root, rhs.root);
    return *this;
  }
  ~scapegoat_tree() { delete_self(root); }

  //普通操作
  void insert(const T& w) { insert(root, w); }
  node*& search(const T& w) { return search(root, w); }
  void erase(const T& w) { erase(root, w); }
  void preorder(void (*f)(const T&)) { preorder(root, f); }
  void midorder(void (*f)(const T&)) { midorder(root, f); }
};  

template<class T>
const double scapegoat_tree<T>::alpha = 0.7;
}  // namespace data_structure
