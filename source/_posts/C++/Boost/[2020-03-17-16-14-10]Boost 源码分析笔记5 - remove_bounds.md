---
mathjax: true
---

# remove_bounds
 这个模版元我还真没猜出他的功能，话说怎么可能有人想得到这个bounds指的是数组的bounds呢？这个模版元的功能是传入一个数组，传出他的内容，即将T[]映射为T。注意： remove_bounds就是remove_extent。
```cpp
template <class T> struct remove_extent{ typedef T type; };

#if !defined(BOOST_NO_ARRAY_TYPE_SPECIALIZATIONS)
template <typename T, std::size_t N> struct remove_extent<T[N]> { typedef T type; };
template <typename T, std::size_t N> struct remove_extent<T const[N]> { typedef T const type; };
template <typename T, std::size_t N> struct remove_extent<T volatile [N]> { typedef T volatile type; };
template <typename T, std::size_t N> struct remove_extent<T const volatile [N]> { typedef T const volatile type; };
#if !BOOST_WORKAROUND(__BORLANDC__, BOOST_TESTED_AT(0x610)) && !defined(__IBMCPP__) &&  !BOOST_WORKAROUND(__DMC__, BOOST_TESTED_AT(0x840))
template <typename T> struct remove_extent<T[]> { typedef T type; };
template <typename T> struct remove_extent<T const[]> { typedef T const type; };
template <typename T> struct remove_extent<T volatile[]> { typedef T volatile type; };
template <typename T> struct remove_extent<T const volatile[]> { typedef T const volatile type; };
#endif
#endif

```
 还是老样子，数组就特判掉，然后返回其头，否则就返回他的本身。
