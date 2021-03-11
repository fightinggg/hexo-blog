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
class AVLT {
  struct node {
    node *ls, *rs;
    int hight;
    T key;
  };
  memery_pool<node> pool;
  node* root=nullptr;
  node* newnode(const T& w) {
    node* res = pool.get();
    res->ls = res->rs = nullptr;
    res->hight = 1;
    res->key = w;
    return res;
  }
  void rotate(node*& rt, int l) {
    node* cur = rt;
    if (l) {
      rt = rt->ls;
      cur->ls = rt->rs;
      rt->rs = cur;
    } else {
      rt = rt->rs;
      cur->rs = rt->ls;
      rt->ls = cur;
    }
  }
  inline int getlh(node*& rt) { return rt->ls == nullptr ? 0 : rt->ls->hight; }
  inline int getrh(node*& rt) { return rt->rs == nullptr ? 0 : rt->rs->hight; }
  inline int getdis(node*& rt) { return getlh(rt) - getrh(rt); }
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
    if (rt == nullptr) {
      rt = newnode(w);
    } else if (w < rt->key) {
      insert(rt->ls, w);
    } else if (w > rt->key) {
      insert(rt->rs, w);
    }
    maintain(rt);
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
  void erase(node*& rt, const T& w) {
    if (rt == nullptr) {
      return;
    } else if (w < rt->key) {
      erase(rt->ls, w);
    } else if (w > rt->key) {
      erase(rt->rs, w);
    } else {
      node* cur = rt;
      if (rt->ls == nullptr) {
        rt = rt->rs;
        pool.erase(cur);
      } else if (rt->rs == nullptr) {
        rt = rt->ls;
        pool.erase(cur);
      } else {
        cur = cur->rs;
        while (cur->ls != nullptr) cur = cur->ls;
        rt->key = cur->key;
        erase(rt->rs, cur->key);
      }
    }
    maintain(rt);
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
    assert(abs(getdis(rt)) <= 1);
  }

 public:
  AVLT() { root = nullptr; }
  void insert(const T& w) { insert(root, w); }
  node*& search(const T& w) { return search(root, w); }
  void erase(const T& w) { erase(root, w); }
  void preorder(void (*f)(const T&)) { preorder(root, f); }
  void midorder(void (*f)(const T&)) {
    cout << root->hight << endl;
    midorder(root, f);
  }
};

vector<int> vec[2];
int debug = 0;

int main() {
  srand(time(NULL));
  AVLT<int> tree;
  set<int> se;
  int xx = 0;
  while (true) {
    xx++;
    if (rand() % 100000 == 0) {
      tree.midorder([](const int& w) { vec[0].push_back(w); });
      for (int x : se) vec[1].push_back(x);
      assert(vec[0] == vec[1]);
      cout << xx << " ok" << endl;
    }
    switch (rand() % 2) {
      case 0: {
        int x = xx % 100000;
        if (debug) cout << "insert " << x << endl;
        tree.insert(x);
        se.insert(x);
        break;
      }
      case 1: {
        int x = rand() % 100000;
        if (debug) cout << "erase " << x << endl;
        tree.erase(x);
        se.erase(x);
      }
    }
    if (debug) {
      tree.midorder([](const int& w) { cout << w << " "; });
      cout << endl;
      for (int x : se) cout << x << " ";
      cout << endl;
    }
  }
}
