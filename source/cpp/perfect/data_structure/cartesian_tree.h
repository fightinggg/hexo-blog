/*
#pragma once
#include <iostream>
#include <sstream>
#include <stack>
#include <string>
#include <vector>

#include "../memery_management/memery_pool.h"
#include "tree.h"

template <class T>
class CT  {
  struct node {
    node *ls, *rs;
    T key;
  };
  memery_pool<node> pool;
  node* root = nullptr;
  node* newnode(const T& w) {
    node* res = pool.get();
    res->ls = res->rs = nullptr;
    res->key = w;
    return res;
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
  void erase(node*& rt) {
    if (rt == nullptr) return;
    erase(rt->ls);
    erase(rt->rs);
    pool.erase(rt);
  }

 public:
  CT() { root = nullptr; }
  void preorder(void (*f)(const T&)) { preorder(root, f); }
  void midorder(void (*f)(const T&)) { midorder(root, f); }
  void build(T* a, int n) {
    std::stack<node*> s;  // 栈中维护从根到叶子的链
    std::vector<node*> v;
    for (int i = 0; i < n; i++) {
      while (!s.empty() && a[i] > s.top()->key) {
        v.push_back(s.top());
        s.pop();
      }
      for (unsigned int i = 1; i < v.size(); i++) {
        v[i]->rs = v[i - 1];
      }
      s.push(newnode(a[i]));
      if (!v.empty()) {
        s.top()->ls = v.back();
        v.clear();
      }
    }
    while (!s.empty()) {
      v.push_back(s.top());
      root = s.top();
      s.pop();
    }
    for (unsigned int i = 1; i < v.size(); i++) {
      v[i]->rs = v[i - 1];
    }
    v.clear();
  }
  void clear() { erase(root); }
};

void test() {
  using namespace std;
  CT<int> tree;
  while (true) {
    string input;
    getline(cin, input);
    stringstream line(input);
    vector<int> v;
    int x;
    while (line >> x) v.push_back(x);
    CT<int> ct;
    ct.build(v.data(), v.size());
    ct.preorder([](const int& w) { cout << w; });
    cout << endl;
    ct.midorder([](const int& w) { cout << w; });
    cout << endl;
  }
}*/
