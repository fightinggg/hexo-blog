---
date: 2020-03-17 15:19:27
updated: 2020-03-17 15:19:27
mathjax: true
---

# is array 
 要先看下面的笔记，才能看懂此篇。
{% post_link 'Boost-源码分析笔记3-integral-constant' 点我开始阅读 %}

# 实现
 is array的实现非常简单，我们先假设所有的都不是array，即如第四行所示，然后利用偏特化，特判掉所有的array即可，让他们继承true_type,这样我们在使用的时候用::value即可判断。
```cpp
#if defined( __CODEGEARC__ )
   template <class T> struct is_array : public integral_constant<bool, __is_array(T)> {};
#else
   template <class T> struct is_array : public false_type {};
#if !defined(BOOST_NO_ARRAY_TYPE_SPECIALIZATIONS)
   template <class T, std::size_t N> struct is_array<T[N]> : public true_type {};
   template <class T, std::size_t N> struct is_array<T const[N]> : public true_type{};
   template <class T, std::size_t N> struct is_array<T volatile[N]> : public true_type{};
   template <class T, std::size_t N> struct is_array<T const volatile[N]> : public true_type{};
#if !BOOST_WORKAROUND(__BORLANDC__, < 0x600) && !defined(__IBMCPP__) &&  !BOOST_WORKAROUND(__DMC__, BOOST_TESTED_AT(0x840))
   template <class T> struct is_array<T[]> : public true_type{};
   template <class T> struct is_array<T const[]> : public true_type{};
   template <class T> struct is_array<T const volatile[]> : public true_type{};
   template <class T> struct is_array<T volatile[]> : public true_type{};
#endif
#endif
```