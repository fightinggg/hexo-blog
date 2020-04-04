---
title: Boost 源码分析笔记8 - any
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
abbrlink: 4de0a3b
date: 2020-03-17 16:55:58
---

# 这篇博客需要
{% post_link 'Boost-源码分析笔记7-decay' decay %}

# 我们来分析一个简单的any
&emsp;&emsp; 如{% post_link 'Boost-学习笔记2-Boost-Any' Any接口学习 %}所示，any能够支持我们的c++向python一样，给一个变量瞎赋值，这也太爽了。
# 构造函数如下
```cpp
        template<typename ValueType>
        any(const ValueType & value)
          : content(new holder<
                BOOST_DEDUCED_TYPENAME remove_cv<BOOST_DEDUCED_TYPENAME decay<const ValueType>::type>::type
            >(value))
        {
        }
```
&emsp;&emsp; 这里是接受任意的类型，然后对这个类型使用decay得到他的基本类型，最后让holder来替我们管理。holder保持了一个输入参数的副本，我们发现这个holder类型的值放到了一个叫content的指针中。

<!---more-->


# holder
&emsp;&emsp; holder继承自placeholder，placeholder是一个接口，我们不去管他，holder内部的副本保存在held中。
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
# any数据类型的读取
&emsp;&emsp; any数据有两种读取方式，一是指针，想要读取出里面的元素，显然元素是operand->content->held, 我们要得到他的指针的话，先构造出指针来： holder&lt;remove_cv&lt;ValueType&gt;::type&gt;*, 因为operand->content是placeholer,这也就是为什么下面的代码的括号在->held之前的原因。最后用boost::addressof取出地址就可以了。
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
&emsp;&emsp; 第二种方式是读取拷贝，先移除引用，调用上面的指针读取，最后指针取内容就可以返回了。
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

# any的成员函数
&emsp;&emsp; 前两个就不说了，直接说第三个，如果content存在，就调用content的type
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
&emsp;&emsp; type是这样实现的
```cpp
            virtual const boost::typeindex::type_info& type() const BOOST_NOEXCEPT
            {
                return boost::typeindex::type_id<ValueType>().type_info();
            }
```

