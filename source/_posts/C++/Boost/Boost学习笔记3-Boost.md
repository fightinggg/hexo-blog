---
date: 2020-03-17 18:13:25
updated: 2020-03-17 18:13:25
mathjax: true
---

# Boost::Tuple
 boost::tuple是一个元组。在c++11被编入STL
 第六行无法通过编译，这说明tuple的长度最长只能是10
 第9-12行定义了3个元组
 第13行演示了如何通过make_tuple构造元组
 第14行演示了如何通过get来访问元组里面的元素
 第16行演示了get的返回值是引用
 第19-20行演示了tuple的等号操作
 第23-27行演示了tuple中可以储存引用
 第28行通过tie构造了一个全引用元组
```cpp
#include <boost/tuple/tuple.hpp>
#include <boost/tuple/tuple_comparison.hpp>
#include <boost/tuple/tuple_io.hpp>
#include <bits/stdc++.h>

// boost::tuple<int, int, int, int, int, int, int, int, int, int, int>too_long;
int main() {
  // 基本操作
  boost::tuple<int, int, int, int, int, int, int, int, int, int> a(
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  boost::tuple<std::string, std::string> b("hello", "world");
  boost::tuple<std::string, std::string> c("hello", "world2");
  std::cout << boost::make_tuple(1, 2, 3, 4) << std::endl;
  std::cout << "a.get<0>() is " << a.get<0>() << std::endl;
  std::cout << "a is " << a << std::endl;
  a.get<0>() = -1;
  std::cout << "a is " << a << std::endl;
  std::cout << "b is " << b << std::endl;
  std::cout << "b==c is " << (b == c) << std::endl;
  std::cout << "b==b is " << (b == b) << std::endl;

  // 进阶操作
  int x = 1, y = 2;
  boost::tuple<int&, int> reference(boost::ref(x), y);
  // boost::tuple<int&, int> reference(x, y); 也可以
  x = 5;
  std::cout << "reference is " << reference << std::endl;
  auto reference2 = boost::tie(x, y);
  x = 10, y = 11;
  std::cout << "reference2 is " << reference2 << std::endl;
}
```
输出
```
(1 2 3 4)
a.get<0>() is 1
a is (1 2 3 4 5 6 7 8 9 10)
a is (-1 2 3 4 5 6 7 8 9 10)
b is (hello world)
b==c is 0
b==b is 1
reference is (5 2)
reference2 is (10 11)
```