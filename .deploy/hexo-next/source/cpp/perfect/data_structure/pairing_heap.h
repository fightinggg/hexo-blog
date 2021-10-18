#pragma once

#include "../memery_management/memery_pool.h"
#include "heap.h"
#include "vector.h"

namespace data_structure {
template <class T>
class pairing_heap : public heap<T> {
 private:
  struct node {
    T value;
    node *r, *son;
  };
  memery_pool<node> pool;
  node* root = nullptr;

  node* merge(node* a, node* b) {
    if (a == nullptr) return b;
    if (b == nullptr) return a;
    if (a->value < b->value) algorithm::swap(a, b);
    b->r = a->son;
    a->son = b;
    return a;
  }
  node* merges(node* a) {
    if (a == nullptr) return nullptr;
    node* b = a->r;
    a->r = nullptr;
    if (b == nullptr) return a;
    node* c = b->r;
    b->r = nullptr;
    return merge(merge(a, b), merges(c));
  }

 public:
  // 构造函数待实现
  void merge(pairing_heap<T>& rhs) {
    root = merge(root, rhs.root);
    rhs.root = nullptr;
  }
  void push(const T& w) {
    node* t = pool.get();
    t->son = t->r = nullptr;
    t->value = w;
    root = merge(root, t);
  }
  void pop() {
    node* old = root;
    root = merges(root->son);
    pool.erase(old);
  }
  const T& top() { return root->value; }
};

}  // namespace data_structure
