#pragma once

#include "../algorithm/general.h"
#include "../memery_management/memery_pool.h"
#include <assert.h>


namespace data_structure {
template <class T>
class vector {
  T* _data;
  int top, cap;
  memery_pool<T> pool;

 public:
  // create or copy
  vector(int x = 0) : top(x), cap(x * 2 + 1) {
    _data = pool.get_array(cap);
    for (int i = 0; i < top; i++) _data[i] = T();
  }
  vector(int x, const T& rhs) : top(x), cap(x) {
    _data = pool.get_array(cap);
    for (int i = 0; i < top; i++) _data[i] = rhs;
  }
  vector(const vector<T>& rhs) : top(rhs.top), cap(rhs.cap) {
    _data = pool.get_array(cap);
    for (int i = 0; i < top; i++) _data[i] = rhs[i];
  }
  vector<T> operator=(const vector<T>& rhs) {
    pool.erase_array(_data, cap);
    top = rhs.top;
    cap = rhs.cap;
    _data = pool.get_array(cap);
    for (int i = 0; i < top; i++) _data[i] = rhs[i];
    return *this;
  }
  ~vector() { pool.erase_array(_data, cap); }

  //
  void clear() { top = 0; }
  T* begin() const { return _data; }
  T* end() const { return _data + top; }
  T* data() const { return _data; }
  void pop_back() { --top; }
  T& back() const { return _data[top - 1]; }
  T& front() const { return _data[0]; }
  int size() const { return top; }
  void insert(T* p, const T& w) { insert(p, &w, &w + 1); }
  void erase(T* p) { erase(p, p + 1); }
  bool empty() const { return top == 0; }
  T& operator[](int x) const {
    assert(x < top);
    return _data[x];
  }
  bool operator==(const vector<T>& rhs) const {
    if (top != rhs.top) return false;
    for (int i = 0; i < top; i++)
      if (_data[i] != rhs[i]) return false;
    return true;
  }
  bool operator!=(const vector<T>& rhs) const { return !(*this == rhs); }
  bool operator<(const vector<T>& rhs) const {
    int len = algorithm::min(size(), rhs.size());
    for (int i = 0; i < len; i++) {
      if (_data[i] < rhs[i])
        return true;
      else if (rhs[i] < _data[i])
        return false;
    }
    return size() < rhs.size();
  }
  void reserve(int x) {
    if (cap < x) {
      T* nw = pool.get_array(x);
      for (int i = 0; i < top; i++) nw[i] = _data[i];
      pool.erase_array(_data, cap);
      _data = nw;
      cap = x;
    }
  }
  void push_back(const T& x) {
    if (top == cap) reserve(2 * top);
    _data[top++] = x;
  }
  void reverse() {
    for (int i = 0; i < top - i - 1; i++)
      algorithm::swap(_data[i], _data[top - i - 1]);
  }

  void insert(T* p, const T* l, const T* r) {
    assert(p >= begin() && p <= end());
    assert(r <= begin() || l >= end());
    int idx = p - begin();
    if (top + r - l > cap) reserve(top + r - l);
    p = begin() + idx;
    for (T* it = end() - 1; it >= p; it--) *(it + (r - l)) = *it;
    top += r - l;
    while (l != r) *(p++) = *(l++);
  }
  void erase(T* a, T* b) {  // [a,b)
    assert(b <= end() && b >= begin());
    assert(a <= end() && a >= begin());
    while (b != end()) *(a++) = *(b++);
    top -= b - a;
  }
  vector<T> erase(const T& w) {
    vector<T> res;
    for (const T& x : *this)
      if (x != w) res.push_back(x);
    return res;
  }
  void show() {
    // for (int i = 0; i < top; i++) std::cout << _data[i] << " ";
  }
};

}  // namespace data_structure
