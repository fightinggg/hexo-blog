#pragma once

#include "../algorithm/random.h"
#include "search_tree.h"

namespace data_structure {
template <class T>
class treap : public search_tree<T> {
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
  node* zig(node* rt) {
    node* ls = rt->ls;
    rt->ls = ls->rs;
    ls->rs = rt;
    return ls;
  }
  node* zag(node* rt) {
    node* rs = rt->rs;
    rt->rs = rs->ls;
    rs->ls = rt;
    return rs;
  }
  node* insert(node* rt, const T& w) {
    if (rt == nullptr)
      return newnode(w);
    else if (w < rt->key) {
      rt->ls = insert(rt->ls, w);
      if (rt->rd < rt->ls->rd) rt = zig(rt);
    } else if (rt->key < w) {
      rt->rs = insert(rt->rs, w);
      if (rt->rd < rt->rs->rd) rt = zag(rt);
    }
    return rt;
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
  node* erase_maintain(node* rt) {
    if (rt == nullptr) return rt;
    int lrd = rt->ls == nullptr ? (1 << 31) : rt->ls->rd;
    int rrd = rt->rs == nullptr ? (1 << 31) : rt->rs->rd;
    if (rt->rd >= lrd && rt->rd >= rrd) return rt;
    if (lrd < rrd) {
      rt = zag(rt);
      rt->ls = erase_maintain(rt->ls);
    } else {
      rt = zig(rt);
      rt->rs = erase_maintain(rt->rs);
    }
    return rt;
  }
  node* erase(node* rt, const T& w) {
    if (rt == nullptr) {
      return rt;
    } else if (w < rt->key) {
      rt->ls = erase(rt->ls, w);
    } else if (rt->key < w) {
      rt->rs = erase(rt->rs, w);
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
        rt->rd = cur->rd;
        rt->rs = erase(rt->rs, cur->key);
        rt = erase_maintain(rt);
      }
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
  treap() { root = nullptr; }
  treap(const treap<T>& rhs) { copy_self(root, rhs.root); }
  treap<T> operator=(const treap<T>& rhs) {
    delete_self(root);
    copy_self(root, rhs.root);
    return *this;
  }
  ~treap() { delete_self(root); }

  //普通操作
  void insert(const T& w) { root = insert(root, w); }
  node*& search(const T& w) { return search(root, w); }
  void erase(const T& w) { root = erase(root, w); }
  void preorder(void (*f)(const T&)) { preorder(root, f); }
  void midorder(void (*f)(const T&)) { midorder(root, f); }
  void test() { test(root); }
};
}  // namespace data_structure
