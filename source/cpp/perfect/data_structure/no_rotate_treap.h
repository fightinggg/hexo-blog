#pragma once

#include "../algorithm/random.h"
#include "search_tree.h"

namespace data_structure {
template <class T>
class no_rotate_treap : public search_tree<T> {
  struct node {
    node *ls, *rs;
    T key;
    int rd;
  };
  memery_pool<node> pool;
  node* root = nullptr;
  void copy_self(node*& rt, node* cp) {
    if (cp == nullptr) return;
    rt = pool.get();
    rt->key = cp->key;
    rt->rd=cp->rd;
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
    res->rd = algorithm::rand();
    return res;
  }
  node* merge(node* l, node* r) {
    if (l == nullptr)
      return r;
    else if (r == nullptr)
      return l;
    else if (l->rd < r->rd) {
      r->ls = merge(l, r->ls);
      return r;
    } else {
      l->rs = merge(l->rs, r);
      return l;
    }
  }
  // l < w   and    r > w
  void split(node* rt, const T& w, node*& l, node*& r) {
    if (rt == nullptr)
      l = nullptr, r = nullptr;
    else if (w < rt->key) {
      r = rt;
      split(r->ls, w, l, r->ls);
    } else {
      l = rt;
      split(l->rs, w, l->rs, r);
    }
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
  node* insert(node* rt, const T& w) {
    if (search(rt, w) != nullptr) return rt;
    node *a, *b;
    split(rt, w, a, b);
    return merge(merge(a, newnode(w)), b);
  }
  node* erase(node* rt, const T& w) {
    node*& tmp = search(rt, w);
    if (tmp != nullptr) {
      node* old = tmp;
      tmp = merge(tmp->ls, tmp->rs);
      pool.erase(old);
    }
    return rt;
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
  void test(node* rt) {
    if (rt == nullptr) return;
    if (rt->ls != nullptr) {
      assert(rt->ls->rd <= rt->rd);
      assert(rt->ls->key < rt->key);
      test(rt->ls);
    }
    if (rt->rs != nullptr) {
      assert(rt->rs->rd <= rt->rd);
      assert(rt->rs->key > rt->key);
      test(rt->rs);
    }
  }

 public:
  // 构造函数和析构函数
  no_rotate_treap() { root = nullptr; }
  no_rotate_treap(const no_rotate_treap<T>& rhs) { copy_self(root, rhs.root); }
  no_rotate_treap<T> operator=(const no_rotate_treap<T>& rhs) {
    delete_self(root);
    copy_self(root, rhs.root);
    return *this;
  }
  ~no_rotate_treap() { delete_self(root); }

  //普通操作
  void insert(const T& w) { root = insert(root, w); }
  node*& search(const T& w) { return search(root, w); }
  void erase(const T& w) { root = erase(root, w); }
  void preorder(void (*f)(const T&)) { preorder(root, f); }
  void midorder(void (*f)(const T&)) { midorder(root, f); }
  void test() { test(root); }
};  // namespace data_structure
}  // namespace data_structure
