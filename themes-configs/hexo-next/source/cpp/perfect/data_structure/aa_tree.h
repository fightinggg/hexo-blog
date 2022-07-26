#pragma once

#include "../algorithm/general.h"
#include "../memery_management/memery_pool.h"
#include "search_tree.h"

namespace data_structure {
/*
 * AA树是红黑树的一个变种，他的本质是右倾红黑树
 *
 * */

template <class T>
class aa_tree : public search_tree<T> {
  struct node {
    node *l, *r;
    int h;
    T key;
  };
  memery_pool<node> pool;
  node* root;

  void copy_self(node*& rt, node* cp) {
    if (cp == nullptr) return;
    rt = pool.get();
    rt->key = cp->key;
    rt->h = cp->h;
    copy_self(rt->l, cp->l);
    copy_self(rt->r, cp->r);
  }
  void delete_self(node* rt) {
    if (rt == nullptr) return;
    delete_self(rt->l);
    delete_self(rt->r);
    pool.erase(rt);
  }
  node* newnode(const T& w) {
    node* res = pool.get();
    res->l = res->r = nullptr;
    res->h = 1;
    res->key = w;
    return res;
  }
  node* zig(node* rt) {
    node* ls = rt->l;
    rt->l = ls->r;
    ls->r = rt;
    return ls;
  }
  node* zag(node* rt) {
    node* rs = rt->r;
    rt->r = rs->l;
    rs->l = rt;
    return rs;
  }
  // 这个函数仅仅处理左儿子跟自己同级的情况，rt只允许出现这一个错误
  // skew以后可能会出现右孙子和自己同级情况
  node* skew(node* rt) {
    if (rt == nullptr) return rt;
    if (rt->l != nullptr && rt->l->h == rt->h) {
      rt = zig(rt);
    }
    return rt;
  }
  node* split(node* rt) {
    if (rt == nullptr) return rt;
    if (rt->r != nullptr && rt->r->r != nullptr && rt->h == rt->r->r->h) {
      rt = zag(rt);
      rt->h++;
    }
    return rt;
  }
  node*& search(node*& rt, const T& w) {
    if (rt == nullptr)
      return rt;
    else if (w < rt->key)
      return search(rt->l, w);
    else if (rt->key < w)
      return search(rt->r, w);
    else
      return rt;
  }
  node* insert(node* rt, const T& w) {
    if (rt == nullptr)
      return newnode(w);
    else if (w < rt->key)
      rt->l = insert(rt->l, w);
    else if (rt->key < w)
      rt->r = insert(rt->r, w);
    return split(skew(rt));
  }
  node* erase(node* rt, const T& w) {
    if (rt == nullptr) {
      return rt;
    } else if (w < rt->key) {
      rt->l = erase(rt->l, w);
    } else if (rt->key < w) {
      rt->r = erase(rt->r, w);
    } else {
      if (rt->l != nullptr) {  // 左边非空，则取前驱
        node* tmp = rt->l;
        while (tmp->r != nullptr) tmp = tmp->r;
        rt->l = erase(rt->l, rt->key = tmp->key);
      } else if (rt->r != nullptr) {  // 右边非空则取后继
        node* tmp = rt->r;
        while (tmp->l != nullptr) tmp = tmp->l;
        rt->r = erase(rt->r, rt->key = tmp->key);
      } else {
        pool.erase(rt);
        return nullptr;
      }
    }
    int hl = rt->l == nullptr ? 0 : rt->l->h;
    int hr = rt->r == nullptr ? 0 : rt->r->h;
    if (hl == rt->h - 2) {  // 左儿子下沉
      if (hr == rt->h - 1) {
        rt->h--;
        rt = split(rt);
      } else {
        rt->h--;
        rt->r->h--;
        rt->r = skew(rt->r);
        if (rt->r != nullptr) rt->r->r = skew(rt->r->r);
        rt = split(rt);
        rt->r = split(rt->r);
      }
    } else if (hr == rt->h - 2) {  // 右儿子下沉
      rt->h--;
      rt = skew(rt);
      rt->r = skew(rt->r);
      rt = split(rt);
    }
    return rt;
  }
  void preorder(node*& rt, void (*f)(const T&)) {
    if (rt == nullptr) return;
    f(rt->key);
    preorder(rt->l, f);
    preorder(rt->r, f);
  }
  void midorder(node*& rt, void (*f)(const T&)) {
    if (rt == nullptr) return;
    midorder(rt->l, f);
    f(rt->key);
    midorder(rt->r, f);
  }
  void test(node* rt) {
    if (rt == nullptr) return;
    if (rt->l == nullptr && rt->r == nullptr)
      assert(rt->h == 1);  // 所有叶子节点的高度为1
    if (rt->l != nullptr)
      assert(rt->l->h == rt->h - 1);  // 所有左孩子的高度为父亲的减1
    if (rt->r != nullptr) {
      assert(rt->r->h == rt->h - 1 ||
             rt->r->h == rt->h);  // 所有右孩子的高度为父亲或减1
      if (rt->r->r != nullptr) assert(rt->r->r->h < rt->h);  // 孙子严格小自己
    }
    if (rt->h > 1)
      assert(rt->l != nullptr && rt->r != nullptr);  // 大于1的节点有两个儿子
    test(rt->l);
    test(rt->r);
  }

 public:
  // 构造函数和析构函数
  aa_tree() { root = nullptr; }
  aa_tree(const aa_tree<T>& rhs) { copy_self(root, rhs.root); }
  aa_tree<T> operator=(const aa_tree<T>& rhs) {
    delete_self(root);
    copy_self(root, rhs.root);
    return *this;
  }
  ~aa_tree() { delete_self(root); }

  void insert(const T& w) { root = insert(root, w); }
  node*& search(const T& w) { return search(root, w); }
  void erase(const T& w) { root = erase(root, w); }
  void preorder(void (*f)(const T&)) { preorder(root, f); }
  void midorder(void (*f)(const T&)) { midorder(root, f); }
  void test() { test(root); }
};
}  // namespace data_structure
