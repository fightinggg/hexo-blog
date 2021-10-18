#pragma once

#include "../algorithm/general.h"
#include "../memery_management/memery_pool.h"
#include "search_tree.h"

namespace data_structure {
template <class T>
class splay_tree : public search_tree<T> {
  struct node {
    node *ch[2], *fa;
    T key;
  };
  memery_pool<node> pool;
  node* root;

  void copy_self(node*& rt, node* fa, node* cp) {
    if (cp == nullptr) return;
    rt = pool.get();
    rt->key = cp->key;
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
    res->key = w;
    return res;
  }
  int which_son(node* rt) { return rt == rt->fa->ch[1]; }
  void rotate(node* son) {  // 把son旋转成为根
    assert(son != nullptr);
    node* fa = son->fa;
    if (fa == root) root = son;
    assert(fa != nullptr);
    node* gr = fa->fa;
    int sonis = which_son(son);
    son->fa = gr;
    fa->fa = son;
    if (son->ch[sonis ^ 1] != nullptr) son->ch[sonis ^ 1]->fa = fa;
    if (gr != nullptr) gr->ch[gr->ch[1] == fa] = son;
    fa->ch[sonis] = son->ch[sonis ^ 1];
    son->ch[sonis ^ 1] = fa;
  }
  void splay(node* rt) {
    assert(rt != nullptr);
    while (rt->fa != nullptr) {
      node *fa = rt->fa, *gr = fa->fa;
      if (fa != root) which_son(rt) == which_son(fa) ? rotate(fa) : rotate(rt);
      rotate(rt);
    }
  }
  node* search(node* rt, const T& w) {
    if (rt == nullptr)
      return rt;
    else if (w < rt->key)
      return search(rt->ch[0], w);
    else if (rt->key < w)
      return search(rt->ch[1], w);
    else {
      splay(rt);
      return rt;
    }
  }
  void insert(node*& rt, const T& w, node* fa) {
    if (rt == nullptr) {
      splay(rt = newnode(w, fa));
    } else if (w < rt->key) {
      insert(rt->ch[0], w, rt);
    } else if (rt->key < w) {
      insert(rt->ch[1], w, rt);
    }
  }
  void replace(node* a, node* b) {
    if (a == root)
      root = b;
    else
      a->fa->ch[which_son(a)] = b;
    if (b != nullptr) b->fa = a->fa;
    pool.erase(a);
  }
  void erase(node* rt, const T& w) {
    rt = search(rt, w);
    if (rt == nullptr || rt->key != w) return;
    if (rt->ch[0] == nullptr)
      replace(rt, rt->ch[1]);
    else if (rt->ch[1] == nullptr)
      replace(rt, rt->ch[0]);
    else {
      node* pre = rt->ch[0];
      while (pre->ch[1] != nullptr) pre = pre->ch[1];
      rt->key = pre->key;
      replace(pre, pre->ch[0]);
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
  splay_tree() { root = nullptr; }
  splay_tree(const splay_tree<T>& rhs) { copy_self(root, nullptr, rhs.root); }
  splay_tree<T> operator=(const splay_tree<T>& rhs) {
    delete_self(root);
    copy_self(root, nullptr, rhs.root);
    return *this;
  }
  ~splay_tree() { delete_self(root); }

  void insert(const T& w) { insert(root, w, nullptr); }
  node*& search(const T& w) { return search(root, w); }
  void erase(const T& w) { erase(root, w); }
  void preorder(void (*f)(const T&)) { preorder(root, f); }
  void midorder(void (*f)(const T&)) { midorder(root, f); }
};

}  // namespace data_structure
