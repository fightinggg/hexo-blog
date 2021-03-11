#pragma once
#include "../algorithm/general.h"
#include "../memery_management/memery_pool.h"
#include "heap.h"
#include "vector.h"

namespace data_structure {
template <class T>
class binomial_heap : public heap<T> {
 private:
  struct node {
    T value;
    node *r, *son;
  };
  memery_pool<node> pool;
  vector<node*> root;

  // 这里如果使用单链表的话，在我们的merge(node*,node*)中，我们只能实现为头插法，这导致了deg必须为递减序列
  // 这导致我们在插入的时候，必须定位到链表的尾部,这会耗很多常数时间
  //
  // 如果使用双链表，常数更大，每次更改都是几倍的常数
  //
  // 这里我们还是考虑使用数组直接映射，而不是链表,
  //
  //
  node* merge(node* a, node* b) {
    if (a == nullptr) return b;
    if (b == nullptr) return a;
    if (a->value < b->value) algorithm::swap(a, b);
    b->r = a->son;
    a->son = b;
    return a;
  }
  void push(node* nd, int place) {
    if (nd == nullptr) return;
    while (root.size() - 1 < place || root.back() != nullptr)
      root.push_back(nullptr);
    while (root[place] != nullptr) {
      nd = merge(nd, root[place]);
      root[place++] = nullptr;
    }
    root[place] = nd;
  }
  int get_max_node() {
    int t = 0;
    for (int i = 1; i < root.size(); i++) {
      if (root[i] == nullptr) continue;
      if (root[t] == nullptr || root[t]->value < root[i]->value) {
        t = i;
      }
    }
    return t;
  }

 public:
  void merge(binomial_heap<T>& rhs) {
    for (int i = 0; i < rhs.root.size(); i++) push(rhs.root[i], i);
    rhs.root.clear();
  }
  void push(const T& w) {
    node* t = pool.get();
    t->son = t->r = nullptr;
    t->value = w;
    push(t, 0);
  }
  void pop() {
    int t = get_max_node();
    node* mx = root[t]->son;
    pool.erase(root[t]);
    root[t] = nullptr;
    while (mx != nullptr) {
      node* nex = mx->r;
      mx->r = nullptr;
      push(mx, --t);
      mx = nex;
    }
  }
  const T& top() { return root[get_max_node()]->value; }
};
}  // namespace data_structure
