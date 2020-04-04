---
title: Boost 源码分析笔记7 - decay
mathjax: true
categories:
  - c++笔记
  - Boost源码分析笔记
tags:
  - c++笔记
  - Boost源码分析笔记
keywords:
  - c++笔记
  - Boost源码分析笔记
abbrlink: 1968627f
date: 2020-03-17 16:41:19
---

# 这篇博客要求提前知道
{% post_link 'Boost-源码分析笔记2-is-array' is_array %}
{% post_link 'Boost-源码分析笔记4-is-function' is_function%}
{% post_link 'Boost-源码分析笔记5-remove-bounds' remove_bounds%}
{% post_link 'Boost-源码分析笔记6-remove-reference' remove_reference%}
{% post_link 'Boost-源码分析笔记1-remove-cv' remove_cv%}

# decay 
&emsp;&emsp; 这个模版元的意思是移除引用、移除const、移除volatile、数组移除范围、函数变成指针。
```cpp
   namespace detail
   {

      template <class T, bool Array, bool Function> struct decay_imp { typedef typename remove_cv<T>::type type; };
      template <class T> struct decay_imp<T, true, false> { typedef typename remove_bounds<T>::type* type; };
      template <class T> struct decay_imp<T, false, true> { typedef T* type; };

   }

    template< class T >
    struct decay
    {
    private:
        typedef typename remove_reference<T>::type Ty;
    public:
       typedef typename boost::detail::decay_imp<Ty, boost::is_array<Ty>::value, boost::is_function<Ty>::value>::type type;
    };
```
&emsp;&emsp; 实际上做起来的时候是先移除引用，最后移除cv的。
