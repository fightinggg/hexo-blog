---
date: 2020-03-17 13:34:24
updated: 2020-03-17 21:16:57

---

# Boost 与c++

 Boost是基于C++标准的现代库，他的源码按照Boost Software License 来发布，允许任何人自由使用、修改和分发。

# Boost有哪些功能？

 Boost强大到拥有超过90个库，但我们暂时只学习其中一部分

<!---more-->

## Any 

 boost::any是一个数据类型，他可以存放任意的类型，例如说一个类型为boost::any的变量可以先存放一个int类型的值，然后替换为一个std::string的类型字符串。

## Array

 好像是一个数组容器，和std::vector应该差别不大。

## and more ...

# 这个系列的博客来干嘛？

 这个系列的博客用来介绍Boost提供的接口，不对Boost进行源码分析，关于Boost的源码，预计会在Boost源码分析笔记系列的博客中。













# Boost.Any
  Any在C++17被编入STL
C++是强类型语言，没有办法向Python那样把一个int赋值给一个double这种骚操作，而Boost.Any库为我们模拟了这个过程，使得我们可以实现弱类型语言的东西。

## 在基本数据类型中玩弱类型
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

## char数组不行了
```cpp
#include <boost/any.hpp>
int main(){
  boost::any a = 1;
  a = "hello world";
}
```
 上诉代码可以编译和运行，但是一定会碰到问题的，当我们把char数组弄过去的时候，就不太行了，原因是char[]不支持拷贝构造，但是我们可以通过把std::string来解决这个问题。
## 用std::string代替char数组
```cpp
#include <boost/any.hpp>
int main(){
  boost::any a = 1;
  a = std::string("hello world");
}
```
 可以见到我们用string完美地解决了这个问题。
## 写很容易，如何读呢？
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
## 类型不对会抛出异常
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

## 成员函数

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

## 拿到指针
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

# Boost::Variant
 boost::variant和any很像，variant和any一样在C++17中被编入STL

 variant可以指定一部分数据类型，你可以在这一部分中随便赋值，就像下面写到的一样，另外和any的any_cast不一样的是variant使用get&lt;T&gt;来获得内容。

```cpp
#include <boost/variant.hpp>
#include <iostream>
#include <string>

int main() {
  boost::variant<double, char, std::string> v;
  v = 3.14;
  std::cout << boost::get<double>(v) << std::endl;
  v = 'A';
  // std::cout << boost::get<double>(v) << std::endl; 这句现在会报错
  std::cout << boost::get<char>(v) << std::endl;
  v = "Hello, world!";
  std::cout << boost::get<std::string>(v) << std::endl;
}
```

## 访问者模式
 variant允许我们使用访问者模式来访问其内部的成员，使用函数boost::apply_visitor来实现，访问者模式使用的时候重载仿函数。仿函数记得继承static_visitor即可。
```cpp
#include <boost/variant.hpp>
#include <iostream>
#include <string>

struct visit : public boost::static_visitor<> {
  void operator()(double &d) const { std::cout << "double" << std::endl; }
  void operator()(char &c) const { std::cout << "char" << std::endl; }
  void operator()(std::string &s) const { std::cout << "string" << std::endl; }
};

int main() {
  boost::variant<double, char, std::string> v;
  v = 3.14;
  boost::apply_visitor(visit(), v);
  v = 'A';
  boost::apply_visitor(visit(), v);
  v = "Hello, world!";
  boost::apply_visitor(visit(), v);
}
```
输出
```
double
char
string
```



# StringAlgorithms
 我终于找到一个暂时没有被编入C++17的库了，听说在C++20中他也没进，哈哈哈。
## 大小写转化
 首先上来的肯定就是大小写转化啦，使用函数to_upper_copy(string)就可以了。
```cpp
#include <boost/algorithm/string.hpp>
#include <iostream>

int main() {
  std::string s = "abcdefgABCDEFG";
  std::cout << boost::algorithm::to_upper_copy(s) << std::endl;
  std::cout << boost::algorithm::to_lower_copy(s) << std::endl;
}
```

<!---more-->

## 删除子串
 erase_all_copy就是说先copy一份，然后再将子串全部删除，如果不带copy就是说直接操作穿进去的母串。下面的代码都可以去掉_copy,erase_first指的是删除第一次出现的，last指的是删除最后一次出现的，nth指的是删除第n次出现的，n从0开始,erase_head值的是删除前n个字符，erase_tail指的是删除后n个字符。
```cpp
#include <boost/algorithm/string.hpp>
#include <iostream>

int main() {
  std::string s = "000111000111ababab000111000111";
  std::cout << s << std::endl;

  // boost::algorithm::erase_all(s,"ab");
  std::cout << boost::algorithm::erase_all_copy(s, "ab") << std::endl;
  std::cout << boost::algorithm::erase_first_copy(s, "111") << std::endl;
  std::cout << boost::algorithm::erase_last_copy(s, "111") << std::endl;
  std::cout << boost::algorithm::erase_nth_copy(s, "111",0) << std::endl;
  std::cout << boost::algorithm::erase_nth_copy(s, "111",100) << std::endl;
  std::cout << boost::algorithm::erase_head_copy(s, 4) << std::endl;
  std::cout << boost::algorithm::erase_tail_copy(s, 4) << std::endl;
}
```

## 查找子串
 find一类的函数，同上,他将返回一个iterator_range的迭代器。这个迭代器可以操作子串。注意子串和母串共享空间。
```cpp
#include <boost/algorithm/string.hpp>
#include <iostream>

int main() {
  std::string s = "000111000111ababab000111000111";
  std::cout << s << std::endl;
  auto x = boost::algorithm::find_first(s,"000");
  x[0] = '2';
  std::cout << s << std::endl;
  //std::cout << boost::algorithm::find_last(s, "111") << std::endl;
}
```
 又是一套代码下来了
```cpp
#include <boost/algorithm/string.hpp>
#include <iostream>

int main() {
  std::string s = "000111000111ababab000111000111";
  std::cout << s << std::endl;
  auto x = boost::algorithm::find_first(s,"000");
  x = boost::algorithm::find_last(s,"1");
  x = boost::algorithm::find_nth(s,"1",3);
  x = boost::algorithm::find_tail(s,3);
  x = boost::algorithm::find_head(s,3);
  std::cout << s << std::endl;
  //std::cout << boost::algorithm::find_last(s, "111") << std::endl;
}
```

## 替换子串
 replace又是一套如下
```cpp
#include <boost/algorithm/string.hpp>
#include <iostream>

int main() {
  std::string s = "000111000111ababab000111000111";
  std::cout << s << std::endl;

  // boost::algorithm::replace_all(s,"ab");
  std::cout << boost::algorithm::replace_all_copy(s, "ab","all") << std::endl;
  std::cout << boost::algorithm::replace_first_copy(s, "111","first") << std::endl;
  std::cout << boost::algorithm::replace_last_copy(s, "111","last") << std::endl;
  std::cout << boost::algorithm::replace_nth_copy(s, "111", 0,"nth") << std::endl;
  std::cout << boost::algorithm::replace_nth_copy(s, "111", 100,"nth") << std::endl;
  std::cout << boost::algorithm::replace_head_copy(s, 2,"Head") << std::endl;
  std::cout << boost::algorithm::replace_tail_copy(s, 2,"Tail") << std::endl;
}
```

## 修剪字符串
 trim_left_copy 指的是从左边开始修建，删掉空字符等，trim_right_copy是从右边开始修建，trim_copy是两边一起修剪。
```cpp
#include <boost/algorithm/string.hpp>
#include <iostream>

int main() {
  std::string s = "\t  ab  d d  d d d \t";
  std::cout << "|" << s << "|" << std::endl;
  std::cout << "|" << boost::algorithm::trim_left_copy(s) << "|" << std::endl;
  std::cout << "|" << boost::algorithm::trim_right_copy(s) << "|" << std::endl;
  std::cout << "|" << boost::algorithm::trim_copy(s) << "|" << std::endl;
}
```
 这个代码输出了
```
|	  ab  d d  d d d 	|
|ab  d d  d d d 	|
|	  ab  d d  d d d|
|ab  d d  d d d|
```

 我们还可以通过指定谓词来修剪使用trim_left_copy_if
```cpp
#include <boost/algorithm/string.hpp>
#include <iostream>

int main() {
  std::string s = " 01 0 1 000ab  d d  d d d 11111111";
  std::cout << "|" << s << "|" << std::endl;
  std::cout << "|" << boost::algorithm::trim_left_copy_if(s,boost::algorithm::is_any_of(" 01")) << "|" << std::endl;
  std::cout << "|" << boost::algorithm::trim_right_copy_if(s,boost::algorithm::is_any_of(" 01")) << "|" << std::endl;
  std::cout << "|" << boost::algorithm::trim_copy_if(s,boost::algorithm::is_any_of(" 01")) << "|" << std::endl;
}
```
 更多的谓词,我们还有is_lower、is_upper、is_space等谓词。
```cpp
#include <boost/algorithm/string.hpp>
#include <iostream>

int main() {
  std::string s = " 01 0 1 000ab  d d  d d d 11111111";
  std::cout << "|" << s << "|" << std::endl;
  std::cout << "|" << boost::algorithm::trim_copy_if(s,boost::algorithm::is_space()) << "|" << std::endl;
  std::cout << "|" << boost::algorithm::trim_copy_if(s,boost::algorithm::is_digit()) << "|" << std::endl<<std::endl;
  s = "aaaBBBaBBaaa";
  std::cout << "|" << s << "|" << std::endl;
  std::cout << "|" << boost::algorithm::trim_copy_if(s,boost::algorithm::is_lower()) << "|" << std::endl;


}
```

## 字符串比较
 starts_with(s,t)判断s是否以t开头，类似的有ends_with,contains,lexicographical_compare分别表示s是否以t结尾，s是否包含t，s与t的字典序比较。
```cpp
#include <boost/algorithm/string.hpp>
#include <iostream>

int main() {
  std::cout << boost::algorithm::starts_with("abcde", "abc") << std::endl;
  std::cout << boost::algorithm::ends_with("abcde", "cde") << std::endl;
  std::cout << boost::algorithm::contains("abcde", "cde") << std::endl;
  std::cout << boost::algorithm::lexicographical_compare("abcde", "cde") << std::endl;
  std::cout << boost::algorithm::lexicographical_compare("abcde", "abcde") << std::endl;
  std::cout << boost::algorithm::lexicographical_compare("cde", "abcde") << std::endl;
}
```
## 字符串分割
 这个就简单多了，直接split+谓词函数就行了
```cpp
#include <boost/algorithm/string.hpp>
#include <iostream>

int main() {
  std::string s = "abc abc abc * abc ( abc )";
  std::vector<std::string> v;
  boost::algorithm::split(v, s, boost::algorithm::is_any_of(" *()"));
  for (auto x : v) std::cout << x << ".";
  std::cout << std::endl;
}
```
输出
```
abc.abc.abc...abc...abc...
```

我们注意看有些函数前面有个i，比如ierase_all, 这个说的是忽略大小写。

# boost::regex
 C++11的时候，被编入STL
 明天接着整。。。
