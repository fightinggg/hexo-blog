#pragma once
#include "../algorithm/general.h"
#include "../memery_management/memery_pool.h"
#include "heap.h"
#include "vector.h"

namespace data_structure {
template <class T>
class fibonacci_heap : public heap<T> {
 private:
  struct node {
    T value;  // 我们暂时不支持erase和decrease
    int deg;
    node *r, *son;  // 作循环链表不做双向循环
  };
  memery_pool<node> pool;
  node *root, *tail, *minp;

  void delete_self(node*& p) {
    if (p == nullptr) return;
    delete_self(p->r);
    delete_self(p->son);
    pool.erase(p);
    p = nullptr;
  }
  void copy_self(node*& p, node* p2) {
    if (p2 == nullptr) return;
    p = pool.get();
    *p = *p2;  // 浅拷贝
    copy_self(p->r, p2->r);
    copy_self(p->son, p2->son);
  }

  // 把一个堆放入森林
  void push_one_heap(node* p) {
    if (root == nullptr) {
      root = tail = minp = p;
    } else {
      tail->r = p;
      tail = tail->r;
      if (minp->value < tail->value) minp = tail;
    }
  }
  // pop的调整，包含了合并
  void pop_adjust(vector<node*>& vec, node* p) {
    while (vec.size() - 1 < p->deg || vec.back() != nullptr)
      vec.push_back(nullptr);
    while (vec[p->deg] != nullptr) {
      node* p2 = vec[p->deg];
      vec[p->deg] = nullptr;
      if (p->value < p2->value) algorithm::swap(p, p2);
      p2->r = p->son;
      p->son = p2;
      p->deg++;
    }
    vec[p->deg] = p;
  }

 public:
  // 复制构造函数、析构函数、赋值函数
  fibonacci_heap() { root = tail = minp = nullptr; }
  fibonacci_heap(const fibonacci_heap<T>& rhs) { *this = rhs; }  // 深复制
  ~fibonacci_heap() { delete_self(root); }
  fibonacci_heap<T> operator=(const fibonacci_heap<T>& rhs) {
    delete_self(root);
    copy_self(root, rhs.root);
    tail = minp = root;
    while (tail->r != nullptr) {
      tail = tail->r;
      if (minp->value < tail->value) minp = tail;
    }
  }

  // 其他操作
  void merge(fibonacci_heap<T>& rhs) {
    if (root == nullptr) {
      root = rhs.root;
      tail = rhs.tail;
      minp = rhs.minp;
    } else if (rhs.root != nullptr) {
      tail->r = rhs.root;
      tail = rhs.tail;
      if (minp->value < rhs.minp->value) minp = rhs.minp;
    }
    rhs.root = rhs.tail = rhs.minp = nullptr;
  }
  void push(const T& w) {
    node* t = pool.get();
    t->son = t->r = nullptr;
    t->deg = 0;
    t->value = w;
    push_one_heap(t);
  }
  const T& top() { return minp->value; }
  void pop() {
    vector<node*> vec(5, nullptr);
    for (node *p = root, *nex = p; p != nullptr; p = nex) {
      nex = p->r;
      p->r = nullptr;
      if (p != minp) pop_adjust(vec, p);
    }
    for (node *p = minp->son, *nex = p; p != nullptr; p = nex) {
      nex = p->r;
      p->r = nullptr;
      pop_adjust(vec, p);
    }
    pool.erase(minp);
    root = tail = minp = nullptr;
    for (node* p : vec) {
      // p->r=nullptr;
      if (p != nullptr) push_one_heap(p);
    }
  }
};

}  // namespace data_structure
