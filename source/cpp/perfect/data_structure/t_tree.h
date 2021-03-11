#pragma once

#include "../algorithm/sorted_container_operating.h"
#include "../memery_management/memery_pool.h"
#include "search_tree.h"
#include "vector.h"

namespace data_structure {
template <class T, int N>
class t_tree : public search_tree<T> {
  struct node {
    node *ls, *rs;
    int hight;
    vector<T> key;
    void insert(const T& w) {
      auto it = algorithm::lower_bound(key.begin(), key.end(), w);
      if (it == key.end() || *it != w) key.insert(it, w);
    }
    void erase(const T& w) {
      auto it = algorithm::lower_bound(key.begin(), key.end(), w);
      if (it != key.end() && *it == w) key.erase(it);
    }
    T front() { return key.front(); }
    T back() { return key.back(); }
    int size() { return key.size(); }
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
    res->insert(w);
    return res;
  }
  void rotate(node*& rt, int l) {
    node* cur = rt;
    if (l) {
      rt = rt->ls;
      cur->ls = rt->rs;
      rt->rs = cur;
      while (rt->size() < N) {
        T tmp = cur->front();
        rt->insert(tmp);
        cur->erase(tmp);
      }
    } else {
      rt = rt->rs;
      cur->rs = rt->ls;
      rt->ls = cur;
      while (rt->size() < N) {
        T tmp = cur->back();
        rt->insert(tmp);
        cur->erase(tmp);
      }
    }
  }
  inline int getlh(node*& rt) { return rt->ls == nullptr ? 0 : rt->ls->hight; }
  inline int getrh(node*& rt) { return rt->rs == nullptr ? 0 : rt->rs->hight; }
  inline int getdis(node*& rt) { return getlh(rt) - getrh(rt); }
  inline static int max(int a, int b) { return a > b ? a : b; }
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
    if (rt == nullptr)
      rt = newnode(w);
    else if (rt->size() < N) {
      rt->insert(w);
    } else if (w < rt->front()) {
      insert(rt->ls, w);
    } else if (w > rt->back()) {
      insert(rt->rs, w);
    } else {
      rt->insert(w);
      if (rt->size() != N) {
        T cur = rt->front();
        rt->erase(cur);
        insert(rt->ls, cur);
      }
    }
    maintain(rt);
  }
  node*& search(node*& rt, const T& w) {
    if (rt == nullptr)
      return rt;
    else if (w < rt->front())
      return search(rt->ls, w);
    else if (w > rt->back())
      return search(rt->rs, w);
    else
      return rt;
  }
  void erase(node*& rt, const T& w) {
    if (rt == nullptr) {
      return;
    } else if (w < rt->front()) {
      erase(rt->ls, w);
    } else if (w > rt->back()) {
      erase(rt->rs, w);
    } else {
      node* cur = rt;
      unsigned int size = rt->size();
      rt->erase(w);
      if (size == rt->size()) return;  // nothing erase  not found
      if (rt->ls == nullptr && rt->rs == nullptr) {
        if (rt->size() == 0) {
          rt = nullptr;
          pool.erase(cur);
        }
      } else if (rt->ls != nullptr) {
        cur = cur->ls;
        while (cur->rs != nullptr) cur = cur->rs;
        T tmp = cur->back();
        ;
        rt->insert(tmp);
        erase(rt->ls, tmp);
      } else if (rt->rs != nullptr) {
        cur = cur->rs;
        while (cur->ls != nullptr) cur = cur->ls;
        T tmp = cur->front();
        rt->insert(tmp);
        erase(rt->rs, tmp);
      }
    }
    maintain(rt);
  }
  void preorder(node*& rt, void (*f)(const T&)) {
    if (rt == nullptr) return;
    for (T x : rt->key) f(x);
    preorder(rt->ls, f);
    preorder(rt->rs, f);
  }
  void midorder(node*& rt, void (*f)(const T&)) {
    if (rt == nullptr) return;
    midorder(rt->ls, f);
    for (T x : rt->key) f(x);
    midorder(rt->rs, f);
  }

 public:
  // 构造函数和析构函数
  t_tree() { root = nullptr; }
  t_tree(const t_tree<T, N>& rhs) { copy_self(root, rhs.root); }
  t_tree<T, N> operator=(const t_tree<T, N>& rhs) {
    delete_self(root);
    copy_self(root, rhs.root);
    return *this;
  }
  ~t_tree() { delete_self(root); }

  //普通操作

  void insert(const T& w) { insert(root, w); }
  node*& search(const T& w) { return search(root, w); }
  void erase(const T& w) { erase(root, w); }
  void preorder(void (*f)(const T&)) { preorder(root, f); }
  void midorder(void (*f)(const T&)) { midorder(root, f); }
};

}  // namespace data_structure
