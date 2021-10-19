---
date: 2020-03-17 14:57:43
updated: 2020-03-17 16:55:58
---







# remove_cv

 remove_cv 这个模版类能够帮我们去掉类型的const，他的实现很简单，即使用模版元技术：

```cpp
template <class T> struct remove_cv{ typedef T type; };
template <class T> struct remove_cv<T const>{ typedef T type;  };
template <class T> struct remove_cv<T volatile>{ typedef T type; };
template <class T> struct remove_cv<T const volatile>{ typedef T type; };
```

 这个代码应该非常容易理解，remove_cv的模版是一个T,我们对他做模版偏特化，将const 和volatile分离，然后使用::value就可以得到没有const、volatile的类型了，所以这个类也叫remove_cv。



# is array 



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







# integral_consant 

 这也是一个模版元技术，他储存了自己的类型，模版的类型，模版的值的类型，他的实现如下

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

 这里很明显了，value是值，value_type是value的类型，type是自己的类型。

## true_type false_type

这里就很有意思了，看看就懂

```cpp
typedef integral_constant<bool, true> true_type;
typedef integral_constant<bool, false> false_type;
```

 可能有人会问这个有什么用，其实这样的，很多时候我们需要为我们的类添加一个value，表示true或者false，正常的实现方法是写两遍，一遍处理全部，另一遍特化false，这样写的话，代码复用就太low了，这时候，其实我们只需要实现一遍基类，派生的时候一个继承true，另一个继承false就OK了。



# is_function

这个代码就nb了，我还没看懂，先留个坑,我猜了一下，大概是用来判断一个类型是否是函数指针的。



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





# remove_reference 

这个名字就很棒，就是移除引用的意思。同样他也是模版元技术，他先将所有的类型映射为自己，然后通过模版偏特化的方式将那些引用映射为本身。这里有一个c++的特性即下面代码
 这个代码看懂的人应该不多了。

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
 这里的&&就是右值引用的意思，所以输出是

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

## 然后我们来看源码

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

同样的我们使用模版元技术，将引用就消除了。







# decay 

 这个模版元的意思是移除引用、移除const、移除volatile、数组移除范围、函数变成指针。

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

 实际上做起来的时候是先移除引用，最后移除cv的。







# any

 如{% post_link 'Boost-学习笔记2-Boost-Any' Any接口学习 %}所示，any能够支持我们的c++向python一样，给一个变量瞎赋值，这也太爽了。

## 构造函数如下

```cpp
        template<typename ValueType>
        any(const ValueType & value)
          : content(new holder<
                BOOST_DEDUCED_TYPENAME remove_cv<BOOST_DEDUCED_TYPENAME decay<const ValueType>::type>::type
            >(value))
        {
        }
```

 这里是接受任意的类型，然后对这个类型使用decay得到他的基本类型，最后让holder来替我们管理。holder保持了一个输入参数的副本，我们发现这个holder类型的值放到了一个叫content的指针中。

<!---more-->


## holder

 holder继承自placeholder，placeholder是一个接口，我们不去管他，holder内部的副本保存在held中。

```cpp
        template<typename ValueType>
        class holder
#ifndef BOOST_NO_CXX11_FINAL
          final
#endif
          : public placeholder
        {
        public: // structors

            holder(const ValueType & value)
              : held(value)
            {
            }

#ifndef BOOST_NO_CXX11_RVALUE_REFERENCES
            holder(ValueType&& value)
              : held(static_cast< ValueType&& >(value))
            {
            }
#endif
        public: // queries

            virtual const boost::typeindex::type_info& type() const BOOST_NOEXCEPT
            {
                return boost::typeindex::type_id<ValueType>().type_info();
            }

            virtual placeholder * clone() const
            {
                return new holder(held);
            }

        public: // representation

            ValueType held;

        private: // intentionally left unimplemented
            holder & operator=(const holder &);
        };
```

## any数据类型的读取

 any数据有两种读取方式，一是指针，想要读取出里面的元素，显然元素是operand->content->held, 我们要得到他的指针的话，先构造出指针来： holder&lt;remove_cv&lt;ValueType&gt;::type&gt;*, 因为operand->content是placeholer,这也就是为什么下面的代码的括号在->held之前的原因。最后用boost::addressof取出地址就可以了。

```cpp
    template<typename ValueType>
    ValueType * any_cast(any * operand) BOOST_NOEXCEPT
    {
        return operand && operand->type() == boost::typeindex::type_id<ValueType>()
            ? boost::addressof(
                static_cast<any::holder<BOOST_DEDUCED_TYPENAME remove_cv<ValueType>::type> *>(operand->content)->held
              )
            : 0;
    }
```

 第二种方式是读取拷贝，先移除引用，调用上面的指针读取，最后指针取内容就可以返回了。

```cpp
    template<typename ValueType>
    ValueType any_cast(any & operand)
    {
        typedef BOOST_DEDUCED_TYPENAME remove_reference<ValueType>::type nonref;


        nonref * result = any_cast<nonref>(boost::addressof(operand));
        if(!result)
            boost::throw_exception(bad_any_cast());

        // Attempt to avoid construction of a temporary object in cases when
        // `ValueType` is not a reference. Example:
        // `static_cast<std::string>(*result);`
        // which is equal to `std::string(*result);`
        typedef BOOST_DEDUCED_TYPENAME boost::conditional<
            boost::is_reference<ValueType>::value,
            ValueType,
            BOOST_DEDUCED_TYPENAME boost::add_reference<ValueType>::type
        >::type ref_type;
#ifdef BOOST_MSVC
#   pragma warning(push)
#   pragma warning(disable: 4172) // "returning address of local variable or temporary" but *result is not local!
#endif
        return static_cast<ref_type>(*result);
#ifdef BOOST_MSVC
#   pragma warning(pop)
#endif
    }

```

## any的成员函数

 前两个就不说了，直接说第三个，如果content存在，就调用content的type

```cpp
        bool empty() const BOOST_NOEXCEPT
        {
            return !content;
        }

        void clear() BOOST_NOEXCEPT
        {
            any().swap(*this);
        }

        const boost::typeindex::type_info& type() const BOOST_NOEXCEPT
        {
            return content ? content->type() : boost::typeindex::type_id<void>().type_info();
        }
```

 type是这样实现的

```cpp
            virtual const boost::typeindex::type_info& type() const BOOST_NOEXCEPT
            {
                return boost::typeindex::type_id<ValueType>().type_info();
            }
```