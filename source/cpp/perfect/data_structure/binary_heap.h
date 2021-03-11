#pragma once
#include "../algorithm/general.h"
#include "heap.h"
#include "vector.h"

namespace data_structure {
template <class T>
class binary_heap : public heap<T> {
 private:
  vector<T> data;

 public:
  binary_heap() { data.push_back(T()); }
  void push(const T& w) {
    data.push_back(w);
    for (int i = data.size() - 1; i != 1 && data[i >> 1] < data[i]; i >>= 1) {
      algorithm::swap(data[i], data[i >> 1]);
    }
  }
  void pop() {
    if (data.size() > 1) {
      data[1] = data.back();
      data.pop_back();
      for (int i = 1; (i << 1) < data.size();) {
        int son = (i << 1 | 1) < data.size() && data[i << 1 | 1] > data[i << 1];
        if (data[i] < data[i << 1 | son])
          algorithm::swap(data[i], data[i << 1 | son]);
        else
          break;
        i = i << 1 | son;
      }
    }
  }
  const T& top() { return data[1]; }
  void merge(binary_heap<T>& rhs) {
    for (int i = 1; i < rhs.data.size(); i++) push(rhs.data[i]);
    rhs.data.clear();
  }
};

}  // namespace data_structure
