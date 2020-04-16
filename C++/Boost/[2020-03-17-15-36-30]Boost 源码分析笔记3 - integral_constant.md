---
mathjax: true
---

# integral_consant 
&emsp;&emsp; 这也是一个模版元技术，他储存了自己的类型，模版的类型，模版的值的类型，他的实现如下
```cpp
 template <class T, T val>
   struct integral_constant
   {
      typedef mpl::integral_c_tag tag;
      typedef T value_type;
      typedef integral_constant<T, val> type;
      static const T value = val;

      operator const mpl::integral_c<T, val>& ()const
      {
         static const char data[sizeof(long)] = { 0 };
         static const void* pdata = data;
         return *(reinterpret_cast<const mpl::integral_c<T, val>*>(pdata));
      }
      BOOST_CONSTEXPR operator T()const { return val; }
   };
```
&emsp;&emsp; 这里很明显了，value是值，value_type是value的类型，type是自己的类型。

# true_type false_type
&emsp;&emsp;这里就很有意思了，看看就懂
```cpp
typedef integral_constant<bool, true> true_type;
typedef integral_constant<bool, false> false_type;
```
&emsp;&emsp; 可能有人会问这个有什么用，其实这样的，很多时候我们需要为我们的类添加一个value，表示true或者false，正常的实现方法是写两遍，一遍处理全部，另一遍特化false，这样写的话，代码复用就太low了，这时候，其实我们只需要实现一遍基类，派生的时候一个继承true，另一个继承false就OK了。
