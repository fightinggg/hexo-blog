#pragma once

/*
template <class T>
class memery_pool_not_very_good {
  vector<T*> data;
  vector<int> used;
  vector<T*> rubbish;

 public:
  memery_pool_not_very_good() { used.push_back(2); }
  ~memery_pool_not_very_good() {
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
    *p = T();  // shit it help me debug
    rubbish.push_back(p);
  }
};
*/
#include <iostream>
namespace memery {

int cnt, new_cnt;

};
template <class T>
class memery_pool {
 public:
  memery_pool() {
    memery::cnt++;
    //  std::cout << "构造pool,剩余" << memery::cnt << std::endl;
  }
  ~memery_pool() {
    memery::cnt--;
    //  std::cout << "析构pool,剩余" << memery::cnt << std::endl;
    if (memery::cnt == 0) {
      if (memery::new_cnt == 0)
        puts("到目前为止可能没有内存泄漏");
      else {
        puts("严重警告！！ 内存泄漏");
        std::cout << "内存池已经完全析构,存在" << memery::new_cnt << "个泄漏"
                  << std::endl;
      }
    }
  }
  T* get() {
    memery::new_cnt++;
    return new T();
  }
  T* get_array(int x) {
    memery::new_cnt++;
    return new T[x];
  }
  void erase(T* p) {
    memery::new_cnt--;
    delete p;
  }
  void erase_array(T* p, int x) {
    memery::new_cnt--;
    delete[] p;
  }
};
