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
    return new T();
  }
  void erase(T* p) {
    delete p;
  }
};

/*
 *每一个节点最多有 m 个子节点 m>=3
 *每一个非叶子节点（除根节点）最少有 ⌈m/2⌉ 个子节点 ⌈m/2⌉>=2
 *如果根节点不是叶子节点，那么它至少有两个子节点
 *有 k 个子节点的非叶子节点拥有 k − 1 个键
 *所有的叶子节点都在同一层
 * */
template <class T, int N>  // 每个节点最多存N-1个key 最少(N+1)/2-1个key
class BT {
  struct node {
    vector<T> key;
    vector<node*> son;
  };
  memery_pool<node> pool;
  node* root = nullptr;
  bool leaf(node*& rt) { return rt->son.empty(); }
  void insert(node*& rt, const T& w, node* fa = nullptr, int fap = 0) {
    if (rt == nullptr) {  // empty tree
      rt = pool.get();
      rt->son.reserve(N + 1);
      rt->key.push_back(w);
      return;
    }
    int p = lower_bound(rt->key.begin(), rt->key.end(), w) - rt->key.begin();
    if (p != rt->key.size() && rt->key[p] == w) return;
    if (leaf(rt))
      rt->key.insert(rt->key.begin() + p, w);
    else
      insert(rt->son[p], w, rt, p);
    if (rt->key.size() > N - 1) {
      if (rt == root) {
        fa = pool.get();
        fa->son.reserve(N + 1);
        fa->son.push_back(rt);
      }
      node* nw = pool.get();
      nw->son.reserve(N + 1);
      fa->key.insert(fa->key.begin() + fap, *(rt->key.begin() + N / 2));
      fa->son.insert(fa->son.begin() + fap + 1, nw);
      nw->key.insert(nw->key.end(), rt->key.begin() + N / 2 + 1, rt->key.end());
      if (!leaf(rt))
        nw->son.insert(nw->son.end(), rt->son.begin() + N / 2 + 1,
                       rt->son.end());
      rt->key.erase(rt->key.begin() + N / 2, rt->key.end());
      if (!leaf(rt)) rt->son.erase(rt->son.begin() + N / 2 + 1, rt->son.end());
      if (rt == root) rt = fa;
    }
  }
  node*& search(node*& rt, const T& w) {
    if (rt == nullptr) return rt;
    int p = lower_bound(rt->key.begin(), rt->key.end(), w) - rt->key.begin();
    if (rt->key[p] == w) return rt;
    if (leaf(rt)) return nullptr;
    return search(rt->son[p], w);
  }
  void erase(node*& rt, const T& w, node* fa = nullptr, int fap = 0) {
    if (rt == nullptr) return;
    int p = lower_bound(rt->key.begin(), rt->key.end(), w) - rt->key.begin();
    if (leaf(rt)) {
      if (p < rt->key.size() && rt->key[p] == w)
        rt->key.erase(rt->key.begin() + p);
    } else {
      if (p < rt->key.size() && rt->key[p] == w) {
        node* pre = rt->son[p];
        while (!leaf(pre)) pre = pre->son.back();
        swap(rt->key[p], pre->key.back());
      }
      erase(rt->son[p], w, rt, p);
    }
    if (rt != root && rt->key.size() < (N - 1) / 2) {  // size=(N-1/2)-1
      if (fap >= 1) {                                  // left brother
        node*& br = fa->son[fap - 1];
        if (br->key.size() > (N - 1) / 2) {  // has enough key
          rt->key.insert(rt->key.begin(), fa->key[fap - 1]);
          fa->key[fap - 1] = br->key.back();
          br->key.pop_back();
          if (!leaf(rt)) {
            rt->son.insert(rt->son.begin(), br->son.back());
            br->son.pop_back();
          }
        } else {  // has not enough key , merge
          br->key.insert(br->key.end(), fa->key[fap - 1]);
          br->key.insert(br->key.end(), rt->key.begin(), rt->key.end());
          fa->key.erase(fa->key.begin() + fap - 1);
          if (!leaf(rt))
            br->son.insert(br->son.end(), rt->son.begin(), rt->son.end());
          pool.erase(rt);
          fa->son.erase(fa->son.begin() + fap);
          if (fa == root && fa->key.empty()) {
            pool.erase(fa);
            root = br;
          }
        }
      } else {
        node*& br = fa->son[fap + 1];
        if (br->key.size() > (N - 1) / 2) {
          rt->key.push_back(fa->key[fap]);
          fa->key[fap] = br->key.front();
          br->key.erase(br->key.begin());
          if (!leaf(rt)) rt->son.push_back(br->son.front());
          if (!leaf(rt)) br->son.erase(br->son.begin());
        } else {
          rt->key.insert(rt->key.end(), fa->key[fap]);
          rt->key.insert(rt->key.end(), br->key.begin(), br->key.end());
          fa->key.erase(fa->key.begin() + fap);
          if (!leaf(rt))
            rt->son.insert(rt->son.end(), br->son.begin(), br->son.end());
          pool.erase(br);
          fa->son.erase(fa->son.begin() + fap + 1);
          if (fa == root && fa->key.empty()) {
            pool.erase(fa);
            root = rt;
          }
        }
      }
    }
  }
  void preorder(node*& rt, void (*f)(const T&)) {
    if (rt == nullptr) return;
  }
  void midorder(node*& rt, void (*f)(const T&), int x = 0) {
    if (rt == nullptr) return;
    // cout << "(" << rt->key.size() << " " << rt->son.size() << ")" << endl;
    for (int i = 0; i < rt->key.size(); i++) {
      if (!rt->son.empty()) {
        assert(rt->key.size() + 1 == rt->son.size());
        midorder(rt->son[i], f, x + 1);
      }
      f(rt->key[i]);
    }
    if (!rt->son.empty()) midorder(rt->son.back(), f, x + 1);
  }

 public:
  BT() { root = nullptr; }
  void insert(const T& w) { insert(root, w); }
  node*& search(const T& w) { return search(root, w); }
  void erase(const T& w) { erase(root, w); }
  void preorder(void (*f)(const T&)) { preorder(root, f); }
  void midorder(void (*f)(const T&)) { midorder(root, f); }
};

vector<int> vec[2];
int range = 1000;
int debug = 0;

int main() {
 // srand(time(NULL));
  BT<int, 4> tree;
  set<int> se;
  for (int xx = 0;; xx++) {
    switch (rand() % 2) {
      case 0: {
        int x = xx % range;
        if (debug) cout << "insert " << x << endl;
        tree.insert(x);
        se.insert(x);
        // cout<<"inserrt ok"<<endl;
        break;
      }
      case 1: {
        int x = rand() % range;
        if (debug) cout << "erase " << x << endl;
        tree.erase(x);
        se.erase(x);
      }
    }
    if (debug) {
      tree.midorder([](const int& w) { cout << w << " "; });
      cout << endl;
      for (int x : se) cout << x << " ";
      cout << endl << endl;
    }
    if (rand() % range == 0 || debug) {
      tree.midorder([](const int& w) { vec[0].push_back(w); });
      for (int x : se) vec[1].push_back(x);
      assert(vec[0] == vec[1]);
      cout << xx << " ok" << endl;
    }
  }
}
