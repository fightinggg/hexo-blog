#pragma once
#include "../memery_management/memery_pool.h"
#include "search_tree.h"

namespace data_structure {
template <class T>
class binary_search_tree : public search_tree<T> {
  struct node {
    node *ls, *rs;
    T key;
  };
  memery_pool<node> pool;
  node* root = nullptr;
  void copy_self(node*& rt, node* cp) {
    if (cp == nullptr) return;
    rt = pool.get();
    rt->key = cp->key;
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
    return res;
  }
  void insert(node*& rt, const T& w) {
    if (rt == nullptr)
      rt = newnode(w);
    else if (w < rt->key)
      insert(rt->ls, w);
    else if (rt->key < w)
      insert(rt->rs, w);
  }
  node*& search(node*& rt, const T& w) {
    if (rt == nullptr)
      return rt;
    else if (w < rt->key)
      return search(rt->ls, w);
    else if (rt->key < w)
      return search(rt->rs, w);
    else
      return rt;
  }
  void erase(node*& rt, const T& w) {
    if (rt == nullptr) {
      return;
    } else if (w < rt->key) {
      erase(rt->ls, w);
    } else if (rt->key < w) {
      erase(rt->rs, w);
    } else {
      node* cur = rt;
      if (rt->ls == nullptr) {
        rt = rt->rs;
        pool.erase(cur);
      } else if (rt->rs == nullptr) {
        rt = rt->ls;
        pool.erase(cur);
      } else {
        cur = cur->rs;
        while (cur->ls != nullptr) cur = cur->ls;
        rt->key = cur->key;
        erase(rt->rs, cur->key);
      }
    }
  }
  void preorder(node*& rt, void (*f)(const T&)) {
    if (rt == nullptr) return;
    f(rt->key);
    preorder(rt->ls, f);
    preorder(rt->rs, f);
  }
  void midorder(node*& rt, void (*f)(const T&)) {
    if (rt == nullptr) return;
    midorder(rt->ls, f);
    f(rt->key);
    midorder(rt->rs, f);
  }

 public:
  // 构造函数和析构函数
  binary_search_tree() { root = nullptr; }
  binary_search_tree(const binary_search_tree<T>& rhs) {
    copy_self(root, rhs.root);
  }
  binary_search_tree<T> operator=(const binary_search_tree<T>& rhs) {
    delete_self(root);
    copy_self(root, rhs.root);
    return *this;
  }
  ~binary_search_tree() { delete_self(root); }

  //普通操作
  void insert(const T& w) { insert(root, w); }
  node*& search(const T& w) { return search(root, w); }
  void erase(const T& w) { erase(root, w); }
  void preorder(void (*f)(const T&)) { preorder(root, f); }
  void midorder(void (*f)(const T&)) { midorder(root, f); }
};
}  // namespace data_structure
