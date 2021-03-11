#pragma once

#include "../algorithm/general.h"
#include "../memery_management/memery_pool.h"
#include "heap.h"

namespace data_structure {
template <class T>
class skew_heap : public heap<T> {
 private:
  struct node {
    T value;
    node *l, *r;
  };
  memery_pool<node> pool;
  node* root = nullptr;

  node* merge(node* a, node* b) {
    if (a == nullptr) return b;
    if (b == nullptr) return a;
    if (a->value < b->value) algorithm::swap(a, b);
    a->r = merge(a->r, b);
    algorithm::swap(a->l, a->r);
    return a;
  }

 public:
  // 构造函数未实现
  void merge(skew_heap<T>& rhs) {
    root = merge(root, rhs.root);
    rhs.root = nullptr;
  }
  void push(const T& w) {
    node* t = pool.get();
    t->l = t->r = nullptr;
    t->value = w;
    root = merge(root, t);
  }
  void pop() {
    node* old = root;
    root = merge(root->l, root->r);
    pool.erase(old);
  }
  const T& top() { return root->value; }
};

}  // namespace data_structure
