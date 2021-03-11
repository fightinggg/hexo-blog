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

template <class S, class T, int N>
class TT {
  struct node {
    node *ls, *rs;
    int hight;
    S key;
  };
  memery_pool<node> pool;
  node* root = nullptr;
  node* newnode(const T& w) {
    node* res = pool.get();
    res->ls = res->rs = nullptr;
    res->hight = 1;
    res->key.insert(w);
    return res;
  }
  void rotate(node*& rt, int l) {
    node* cur = rt;
    if (l) {
      rt = rt->ls;
      cur->ls = rt->rs;
      rt->rs = cur;
      while (rt->key.size() < N) {
        T tmp = *cur->key.begin();
        rt->key.insert(tmp);
        cur->key.erase(tmp);
      }
    } else {
      rt = rt->rs;
      cur->rs = rt->ls;
      rt->ls = cur;
      while (rt->key.size() < N) {
        T tmp = *cur->key.rbegin();
        rt->key.insert(tmp);
        cur->key.erase(tmp);
      }
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
    if (rt == nullptr)
      rt = newnode(w);
    else if (rt->key.size() < N) {
      rt->key.insert(w);
    } else if (w < *rt->key.begin()) {
      insert(rt->ls, w);
    } else if (w > *rt->key.rbegin()) {
      insert(rt->rs, w);
    } else {
      rt->key.insert(w);
      if (rt->key.size() != N) {
        T cur = *rt->key.begin();
        rt->key.erase(cur);
        insert(rt->ls, cur);
      }
    }
    maintain(rt);
  }
  node*& search(node*& rt, const T& w) {
    if (rt == nullptr)
      return rt;
    else if (w < *rt->key.begin())
      return search(rt->ls, w);
    else if (w > *rt->key.rbegin())
      return search(rt->rs, w);
    else
      return rt;
  }
  void erase(node*& rt, const T& w) {
    if (rt == nullptr) {
      return;
    } else if (w < *rt->key.begin()) {
      erase(rt->ls, w);
    } else if (w > *rt->key.rbegin()) {
      erase(rt->rs, w);
    } else {
      node* cur = rt;
      unsigned int size = rt->key.size();
      rt->key.erase(w);
      if (size == rt->key.size()) return;  // nothing erase  not found
      if (rt->ls == nullptr && rt->rs == nullptr) {
        if (rt->key.size() == 0) {
          rt = nullptr;
          pool.erase(cur);
        }
      } else if (rt->ls != nullptr) {
        cur = cur->ls;
        while (cur->rs != nullptr) cur = cur->rs;
        T tmp = *cur->key.rbegin();
        rt->key.insert(tmp);
        erase(rt->ls, tmp);
      } else if (rt->rs != nullptr) {
        cur = cur->rs;
        while (cur->ls != nullptr) cur = cur->ls;
        T tmp = *cur->key.begin();
        rt->key.insert(tmp);
        erase(rt->rs, tmp);
      }
    }
    maintain(rt);
  }
  void preorder(node*& rt, void (*f)(const S&)) {
    if (rt == nullptr) return;
    f(rt->key);
    preorder(rt->ls, f);
    preorder(rt->rs, f);
  }
  void midorder(node*& rt, void (*f)(const S&)) {
    if (rt == nullptr) return;
    midorder(rt->ls, f);
    f(rt->key);
    midorder(rt->rs, f);
    assert(abs(getdis(rt))<=1);
    if(rt->ls!=nullptr&&rt->rs!=nullptr) assert(rt->key.size()==N);
  }

 public:
  TT() { root = nullptr; }
  void insert(const T& w) { insert(root, w); }
  node*& search(const T& w) { return search(root, w); }
  void erase(const T& w) { erase(root, w); }
  void preorder(void (*f)(const S&)) { preorder(root, f); }
  void midorder(void (*f)(const S&)) {
    cout << root->hight << endl;
    midorder(root, f);
  }
};

vector<int> vec[2];
int debug = 0;

int main() {
  srand(time(NULL));
  TT<set<int>, int, 10> tree;
  set<int> se;
  int xx = 0;
  while (true) {
    xx++;
    if (rand() % 100000 == 0) {
      tree.midorder([](const set<int>& w) {
        for (int x : w) vec[0].push_back(x);
      });
      for (int x : se) vec[1].push_back(x);
      assert(vec[0] == vec[1]);
      cout << xx << " ok" << endl;
    }
    switch (rand() % 2) {
      case 0: {
        int x = rand() % 100000;
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
      tree.midorder([](const set<int>& w) {
        vector<int> v;
        for (int x : w) v.push_back(x);
        for (unsigned int i = 0; i < v.size(); i++) {
          cout << v[i];
          if (i + 1 < v.size())
            cout << " ";
          else
            cout << "@";
        }
      });
      cout << endl;
      for (int x : se) cout << x << " ";
      cout << endl;
    }
  }
}
