#pragma once

namespace data_structure {
template <class T>
class tree {
 public:
  virtual void insert(const T& w) = 0;
  // node*& search(const T& w) = 0;
  virtual void erase(const T& w) = 0;
  virtual void preorder(void (*f)(const T&)) = 0;
  virtual void midorder(void (*f)(const T&)) = 0;
  virtual int hight() { return 0; }
  virtual void test() {}
  virtual ~tree() {}
};

}  // namespace data_structure
