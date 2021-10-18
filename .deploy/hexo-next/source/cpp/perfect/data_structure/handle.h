#pragma once

namespace data_structure {

template <class T>
class handle {
 private:
  T* ptr;      // 句柄指向的指针
  int* count;  // 句柄引用计数器
 public:
  //构造函数
  handle(T* ptr) : ptr(ptr), count(new int(1)) {}
  // 拷贝构造函数
  handle(const handle<T>& rhs) : ptr(rhs.ptr), count(&++*rhs.count) {}
  //赋值函数
  const handle<T>& operator=(const handle<T>& rhs) {
    if (--*rhs.count == 0) delete ptr, count;
    ptr = rhs.ptr;
    count = &++*rhs.count;
    return *this;
  }

  ~handle() {
    if (--*count == 0) delete ptr, count;
  }

  T& operator*() { return *ptr; }
  T* operator->() { return ptr; }
  const T& operator*() const { return *ptr; }
  const T* operator->() const { return ptr; }
};

}  // namespace data_structure
