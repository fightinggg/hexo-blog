#pragma once

#include "../algorithm/general.h"
#include "../memery_management/memery_pool.h"
#include "heap.h"

namespace data_structure {
template <class T>
class leftist_heap : public heap<T> {
 private:
  struct node {
    T value;
    int dist;
    node *l, *r;
  };
  memery_pool<node> pool;
  node* root = nullptr;

  int get_dist(node* a) {
    if (a == nullptr) return -1;
    return a->dist;
  }

  node* merge(node* a, node* b) {
    if (a == nullptr) return b;
    if (b == nullptr) return a;
    if (a->value < b->value) algorithm::swap(a, b);
    a->r = merge(a->r, b);
    if (get_dist(a->l) < get_dist(a->r)) algorithm::swap(a->l, a->r);
    a->dist = get_dist(a->r) + 1;
    return a;
  }

 public:
  // 构造函数未实现
  void merge(leftist_heap<T>& rhs) {
    root = merge(root, rhs.root);
    rhs.root = nullptr;
  }
  void push(const T& w) {
    node* t = pool.get();
    t->l = t->r = nullptr;
    t->dist = 0;
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
