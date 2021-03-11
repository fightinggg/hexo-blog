#pragma once
#include "../memery_management/memery_pool.h"
#include "search_tree.h"

namespace data_structure {
template <class T>
class avl_tree : public search_tree<T> {
  struct node {
    node *ls, *rs;
    int hight;
    T key;
  };
  memery_pool<node> pool;
  node* root = nullptr;

  void copy_self(node*& rt, node* cp) {
    if (cp == nullptr) return;
    rt = pool.get();
    rt->key = cp->key;
    rt->hight = cp->hight;
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
    res->hight = 1;
    res->key = w;
    return res;
  }
  void rotate(node*& rt, int l) {
    node* cur = rt;
    if (l) {
      rt = rt->ls;
      cur->ls = rt->rs;
      rt->rs = cur;
    } else {
      rt = rt->rs;
      cur->rs = rt->ls;
      rt->ls = cur;
    }
  }
  // static int max(int a, int b) { return a > b ? a : b; }
  inline int getlh(node*& rt) { return rt->ls == nullptr ? 0 : rt->ls->hight; }
  inline int getrh(node*& rt) { return rt->rs == nullptr ? 0 : rt->rs->hight; }
  inline int getdis(node*& rt) { return getlh(rt) - getrh(rt); }
  inline int max(int a, int b) { return a < b ? b : a; }
  inline void pushup(node*& rt) { rt->hight = max(getlh(rt), getrh(rt)) + 1; }
  void maintain(node*& rt) {
    if (rt == nullptr) return;
    if (getdis(rt) == 2) {
      if (getdis(rt->ls) < 0) rotate(rt->ls, 0);
      rotate(rt, 1);
    } else if (getdis(rt) == -2) {  // 这里不能写if
      if (getdis(rt->rs) > 0) rotate(rt->rs, 1);
      rotate(rt, 0);
    }
    if (rt->ls != nullptr) pushup(rt->ls);
    if (rt->rs != nullptr) pushup(rt->rs);
    pushup(rt);
  }
  void insert(node*& rt, const T& w) {
    if (rt == nullptr) {
      rt = newnode(w);
    } else if (w < rt->key) {
      insert(rt->ls, w);
    } else if (rt->key < w) {
      insert(rt->rs, w);
    }
    maintain(rt);
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
    maintain(rt);
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
    assert(abs(getdis(rt)) <= 1);
  }

 public:
  // 构造函数和析构函数
  avl_tree() { root = nullptr; }
  avl_tree(const avl_tree<T>& rhs) { copy_self(root, rhs.root); }
  avl_tree<T> operator=(const avl_tree<T>& rhs) {
    delete_self(root);
    copy_self(root, rhs.root);
    return *this;
  }
  ~avl_tree() { delete_self(root); }

  //普通操作
  void insert(const T& w) { insert(root, w); }
  node*& search(const T& w) { return search(root, w); }
  void erase(const T& w) { erase(root, w); }
  void preorder(void (*f)(const T&)) { preorder(root, f); }
  void midorder(void (*f)(const T&)) { midorder(root, f); }
};
}  // namespace data_structure
