---
mathjax: true
---

# remove_reference 
&emsp;&emsp;这个名字就很棒，就是移除引用的意思。同样他也是模版元技术，他先将所有的类型映射为自己，然后通过模版偏特化的方式将那些引用映射为本身。这里有一个c++的特性即下面代码
&emsp;&emsp; 这个代码看懂的人应该不多了。
```cpp
#include <iostream>

void f(int& x) { std::cout << "&" << std::endl; }
void f(int&& x) { std::cout << "&&" << std::endl; }

int main() {
  int a = 1, b = 2, c = 3, d = 4;
  f(a);
  f(b);
  f(c);
  f(d);
  f(1);
  f(2);
  f(3);
  f(4);
}
```
<!---more-->
&emsp;&emsp; 这里的&&就是右值引用的意思，所以输出是
```
&
&
&
&
&&
&&
&&
&&
```
# 然后我们来看源码
```cpp
namespace detail{
//
// We can't filter out rvalue_references at the same level as
// references or we get ambiguities from msvc:
//
template <class T>
struct remove_rvalue_ref
{
   typedef T type;
};
#ifndef BOOST_NO_CXX11_RVALUE_REFERENCES
template <class T>
struct remove_rvalue_ref<T&&>
{
   typedef T type;
};
#endif

} // namespace detail

template <class T> struct remove_reference{ typedef typename boost::detail::remove_rvalue_ref<T>::type type; };
template <class T> struct remove_reference<T&>{ typedef T type; };

#if defined(BOOST_ILLEGAL_CV_REFERENCES)
// these are illegal specialisations; cv-qualifies applied to
// references have no effect according to [8.3.2p1],
// C++ Builder requires them though as it treats cv-qualified
// references as distinct types...
template <class T> struct remove_reference<T&const>{ typedef T type; };
template <class T> struct remove_reference<T&volatile>{ typedef T type; };
template <class T> struct remove_reference<T&const volatile>{ typedef T type; };
#endif
```
&emsp;&emsp;同样的我们使用模版元技术，将引用就消除了。
