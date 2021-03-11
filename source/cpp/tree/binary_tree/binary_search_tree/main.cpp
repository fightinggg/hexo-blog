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
class BST {
  struct node {
    node *ls, *rs;
    T key;
  };
  memery_pool<node> pool;
  node* root=nullptr;
  node* newnode(const T& w) {
    node* res = pool.get();
    res->ls = res->rs = nullptr;
    res->key = w;
    return res;
  }
  void insert(node*& rt, const T& w) {
    if (rt == nullptr)
      rt = newnode(w);
    else if (w < rt->key)
      insert(rt->ls, w);
    else if (w > rt->key)
      insert(rt->rs, w);
  }
  node*& search(node*& rt, const T& w) {
    if (rt == nullptr)
      return rt;
    else if (w < rt->key)
      return search(rt->ls, w);
    else if (w > rt->key)
      return search(rt->rs, w);
    else
      return rt;
  }
  void erase(node*& rt) {
    node* ls = rt->ls;
    node* rs = rt->rs;
    pool.erase(rt);
    if (ls == nullptr)
      rt = rs;
    else if (rs == nullptr)
      rt = ls;
    else {
      rt = ls;
      while (ls->rs != nullptr) ls = ls->rs;
      ls->rs = rs;
    }
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

 public:
  BST() { root = nullptr; }
  void insert(const T& w) { insert(root, w); }
  node*& search(const T& w) { return search(root, w); }
  void erase(const T& w) {
    node*& tmp = search(w);
    if (tmp != nullptr) erase(tmp);
  }
  void preorder(void (*f)(const T&)) { preorder(root, f); }
  void midorder(void (*f)(const T&)) { midorder(root, f); }
};

int main() {
  BST<int> tree;
  while (true) {
    string op;
    int x;
    cin >> op;
    if (op == "q") break;
    cin >> x;
    if (op == "insert")
      tree.insert(x);
    else if (op == "erase")
      tree.erase(x);
    else
      cout << "input error" << endl;
    tree.preorder([](const int& w) { cout << w << " "; });
    cout << endl;
    tree.midorder([](const int& w) { cout << w << " "; });
    cout << endl;
  }
}
