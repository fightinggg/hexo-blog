#include <bits/stdc++.h>
using namespace std;

// 内存池
template <class T>
class memery_pool {
  vector<T*> data;
  vector<int> used;
  vector<T*> rubbish;

 public:
  memery_pool() { used.push_back(2); }
  ~memery_pool() {
    for (T* p : data) delete[] p;
  }
  T* get() {
    T* res;
    if (!rubbish.empty()) {
      res = rubbish.back();
      rubbish.pop_back();
    } else {
      if (used.back() == (1 << used.size())) {
        data.push_back(new T[used.back() << 1]);
        used.push_back(0);
      }
      res = data.back() + used.back();
      (*used.rbegin())++;
    }
    *res = T();  // very important
    return res;
  }
  void erase(T* p) {
    *p = T();// shit it help me debug
    rubbish.push_back(p);
  }
};

template <class T>
class VPT {
  struct node {
    node *ls, *rs;
    T value;
  };
  memery_pool<node> pool;
  node* root;
  node* newnode(const T& w) {
    node* res = pool.get();
    res->ls = res->rs = nullptr;
    res->value = w;
    return res;
  }
  void preorder(node*& rt, void (*f)(const T&)) {
    if (rt == nullptr) return;
    f(rt->value);
    preorder(rt->ls, f);
    preorder(rt->rs, f);
  }
  void midorder(node*& rt, void (*f)(const T&)) {
    if (rt == nullptr) return;
    midorder(rt->ls, f);
    f(rt->value);
    midorder(rt->rs, f);
  }
  void erase(node*& rt) {
    if (rt == nullptr) return;
    erase(rt->ls);
    erase(rt->rs);
    pool.erase(rt);
  }

 public:
  VPT() { root = nullptr; }
  void preorder(void (*f)(const T&)) { preorder(root, f); }
  void midorder(void (*f)(const T&)) { midorder(root, f); }
  void build(T* a, int n) {
    stack<node*> s;  // 栈中维护从根到叶子的链
    vector<node*> v;
    for (int i = 0; i < n; i++) {
      while (!s.empty() && a[i] > s.top()->value) {
        v.push_back(s.top());
        s.pop();
      }
      for (int i = 1; i < v.size(); i++) {
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
    for (int i = 1; i < v.size(); i++) {
      v[i]->rs = v[i - 1];
    }
    v.clear();
  }
  void clear() { erase(root); }
};

int main() {
  VPT<int> tree;
  while (true) {
    string input;
    getline(cin, input);
    stringstream line(input);
    vector<int> v;
    int x;
    while (line >> x) v.push_back(x);
    VPT<int> ct;
    ct.build(v.data(), v.size());
    ct.preorder([](const int& w) { cout << w; });
    cout << endl;
    ct.midorder([](const int& w) { cout << w; });
    cout << endl;
  }
}
