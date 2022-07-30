#pragma once

namespace data_structure {
template <class T>
class heap {
 public:
  virtual void push(const T& w) = 0;
  virtual const T& top() = 0;
  virtual void pop() = 0;
  virtual ~heap() {}
};
}  // namespace data_structure
