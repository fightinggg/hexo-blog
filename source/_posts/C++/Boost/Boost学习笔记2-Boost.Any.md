---
date: 2020-03-17 13:40:35
updated: 2020-03-17 13:40:35
mathjax: true
---

# Boost.Any
  Any在C++17被编入STL
C++是强类型语言，没有办法向Python那样把一个int赋值给一个double这种骚操作，而Boost.Any库为我们模拟了这个过程，使得我们可以实现弱类型语言的东西。

# 在基本数据类型中玩弱类型
```cpp
#include <boost/any.hpp>
int main(){
  boost::any a = 1;
  a = 3.14;
  a = true;
}
```
 这样的代码是允许编译的，大概是因为boost::any内部储存的是指针。
<!---more-->

# char数组不行了
```cpp
#include <boost/any.hpp>
int main(){
  boost::any a = 1;
  a = "hello world";
}
```
 上诉代码可以编译和运行，但是一定会碰到问题的，当我们把char数组弄过去的时候，就不太行了，原因是char[]不支持拷贝构造，但是我们可以通过把std::string来解决这个问题。
# 用std::string代替char数组
```cpp
#include <boost/any.hpp>
int main(){
  boost::any a = 1;
  a = std::string("hello world");
}
```
 可以见到我们用string完美地解决了这个问题。
# 写很容易，如何读呢？
 我们已经学习了boost::any的写操作，但是应该如何读取呢？
```cpp
#include <boost/any.hpp>
#include <iostream>
int main(){
  boost::any a = 1;
  std::cout << boost::any_cast<int>(a) << std::endl;
}
```
 boost提供了一个模版函数any_cast&lt;T&gt;来对我们的any类进行读取
# 类型不对会抛出异常
 有了any&lt;T&gt;的模版，看起来我们可以对boost进行任意读取，我们试试下这个
```cpp
#include <boost/any.hpp>
#include <iostream>
int main() {
  boost::any a = 1;
  a = "hello world";
  std::cout << boost::any_cast<int>(a) << std::endl;
}
```
 抛出了如下异常
```
libc++abi.dylib: terminating with uncaught exception of type boost::wrapexcept<boost::bad_any_cast>: boost::bad_any_cast: failed conversion using boost::any_cast
```
 实际上上诉代码是永远无法成功的。因为你把一个char数组传了进去。

# 成员函数

 boost的any是有很多成员函数的。比方说empty可以判断是否为空，type可以得到类型信息，
```cpp
#include <boost/any.hpp>
#include <iostream>
#include <typeinfo>

int main() {
  boost::any a = std::string("asdf");
  if (!a.empty()) {
    std::cout << a.type().name() << std::endl;
    a = 1;
    std::cout << a.type().name() << std::endl;
  }
}
```
 代码运行结果如下，表示首先是字符串，然后是整形。
```
NSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE
i
```

# 拿到指针
 当我们把一个any的地址传给any_cast的时候，我们会得到any内部数据的指针，
```cpp
#include <boost/any.hpp>
#include <iostream>

int main()
{
  boost::any a = 1;
  int *i = boost::any_cast<int>(&a);
  std::cout << *i << std::endl;
}
```