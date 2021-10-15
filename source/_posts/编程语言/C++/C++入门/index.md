---
date: 2020-03-13 15:23:53
updated: 2020-03-28 15:33:05
---



# 前言

 从大一上接触C++,到大一下接触ACM,到现在大三下,我自以为对C++有了很深的理解，其实不然，我不清楚的地方还特别多，准备趁此空闲时间重学C++。

# const 与指针

 这是这篇博文的重点，常常我们会碰到多种声明

```cpp
const char* const a = new char[10];
const char* a = new char[10];
char* const a = new char[10];
char* a = new char[10];
```

 他们有什么共性与不同呢?下面的程序演示了区别，注释的地方是非法操作会报错。

```cpp
#include <iostream>
using namespace std;
int main() {
  const char* const a = new char[10];
  const char* b = new char[10];
  char* const c = new char[10];
  char* d = new char[10];
  char* e = new char[10];

  // a[0]='e';
  // a=e;

  // b[0] = 'e';
  b = e;

  c[0] = 'e';
  // c = e;

  d[0] = 'e';
  d = e;

  delete[] a, b, c, d, e;

  return 0;
}
```

 下面解释为啥会出现这种情况，我们注意到const关键字，指的是不可修改的意思，对于b而言，const 修饰char*,表面char*不可修改即指针指向的内容不可修改，对于c而言const修饰c，表示c这个指针本身不可修改。







# enum back

 这是这篇博文的重点，enum back 是一个很实用的编程技术，很多人都会用到它，更进一步，enum back技术是模版元编程的基本技术

```cpp
#include <iostream>
using namespace std;
class my_class {
  enum { size = 10 };
  int data[size];
};

int main() {}
```

 这里其实我们也可以用static const size = 10;来实现，但是这不影响enum是一个好方法，enum不会导致额外的内存分配。



# const 修饰返回值

 如果有必要，尽量使用const修饰返回值

```cpp
#include <iostream>
using namespace std;

const int sum(int a, int b) { return a + b; }

int main() { return 0; }
```

## 有什么好处？

 如果你不小心把==写成了=，下面的代码会报错。当然也有肯定是好处多余坏处

```cpp
#include <iostream>
using namespace std;

const int sum(int a, int b) { return a + b; }

int main() {
  if (sum(1, 2) = 3) {
    printf("hello world!");
  }
}
```





# const 能够重载成员函数

 为什么要重载一遍const? 目前笔者也不太懂，只知道const能够让c++代码更加高效。下面的代码解释了如何使用const重载成员函数，大概是这样的，const对象调用成员函数的时候会调用const版，普通的对象调用普通版。

```cpp
#include <iostream>
using namespace std;

class my_class {
  int x = 1, y = 2;

 public:
  const int& get() const {
    std::cout << "x" << std::endl;
    return x;
  }
  // int& get() const {return x; } 这句话不被允许编译，因为可能会改变x的值
  int& get() {
    std::cout << "y" << std::endl;
    return y;
  }
};

void f(my_class cls) { cls.get(); }
void f2(const my_class cls) { cls.get(); }

int main() {
  my_class cls;

  f(cls);
  f2(cls);
}
```

<!---more-->

## 重载带来的代码翻倍该如何处理？

 大多数情况下，我们不会写上面的代码，那个太蠢了，没人会这样做，通常const版与普通版函数得到的结果是相同的。仅仅多了一个const标记,如果我们对这样相同功能的函数写两份一样的代码，是很不值得的。我们可以这样处理。

```cpp
#include <iostream>
using namespace std;

class my_class {
  int x = 1, y = 2;

 public:
  const int& get() const {
    std::cout << "const" << std::endl;
    return x;
  }
  // int& get() const {return x; } 这句话不被允许编译，因为可能会改变x的值

  int& get() {
    std::cout << "normal" << std::endl;
    return const_cast<int&>(
        (static_cast<const my_class&>(*this)).get()
      );
  }
};

void f(my_class cls) { cls.get(); }
void f2(const my_class cls) { cls.get(); }

int main() {
  my_class cls;

  f(cls);
  f2(cls);
}
```





# 对象初始化

 基本数据类型这里就不说了，直接讲类
 类的对象的初始化往往使用了构造函数，但是很多人不会写构造函数，他们这样实现

```cpp
#include <iostream>
using namespace std;

class node {
  int x;

 public:
  node() {}
  node(int x_) { x = x_; }
};

class my_class {
  node a, b, c, d;

 public:
  my_class(node a_, node b_, node c_, node d_) {
    a = a_;
    b = b_;
    c = c_;
    d = d_;
  }
};
int main() {}```

<!---more-->
 这样实现没有问题，但是效率较低，c++标准保证类的构造函数调用之前初始化先调用成员的构造函数。这样以来，my_class里面的abcd都被先初始化再赋值了，通常我们使用冒号来构造他们。
​```cpp
#include <iostream>
using namespace std;

class node {
  int x;

 public:
  node() {}
  node(int x_) : x(x_) {}
};

class my_class {
  node a, b, c, d;

 public:
  my_class(node a_, node b_, node c_, node d_) : a(a_), b(b_), c(c_), d(d_) {}
};

int main() {}```
## 小细节
 c++标准规定了这里的构造顺序是与声明顺序为序的，而不是冒号后面的顺序。

# 不同编译单元的非局部静态变量顺序问题
 先看代码，这是一个.h
​```cpp
#include <iostream>
using namespace std;

class my_class {};
extern my_class mls;
```

 注意到有一个extern my_class mls;如果我们有多个编译单元，每个都extern一些对象，这些对象初始化的顺序，c++没有规定，所以可能导致他们随机的初始化，但是如果这些对象之间有要求有顺序，怎么办？你乱序初始化可能会出错的。这时候我们可以使用单例模式来保证正确的顺序。

```cpp
#include <iostream>
using namespace std;

class my_class {
 public:
  my_class& singleton() {
    static my_class mls;
    return mls;
  }
};
// extern my_class mls;
```

## 结语

 不要乱写类的构造函数，少写非局部静态变量。



# 编译器默默作出的贡献

 在我们写类的时候，我们可以不写构造函数、拷贝构造函数、赋值操作、析构函数，编译器就为我们作出这一切。

# 带引用成员变量的类

 我们考虑这样一个类，他有一个成员变量是一个引用类型。

```cpp
#include <iostream>
using namespace std;

class my_class {
  int& a;
};

int main() { my_class m; }
```

<!---more-->
 这个类会报错。因为你缺少对a的初始化，现在有两种选择，第一种方案是用一个变量给他赋值

```cpp
#include <iostream>
using namespace std;

int hello = 0;
class my_class {
  int& a = hello;
};

int main() { my_class m; }
```

 或者使用构造函数来给他赋值

```cpp
#include <iostream>
using namespace std;

class my_class {
  int& a;

 public:
  my_class(int& a) : a(a) {}
};

int main() {
  int x = 1, y = 2;
  my_class m1(x);
  my_class m2(y);
  // m1=m2;
}
```

 另一方面，这里的m1=m2,这个赋值操作又不被允许了，原因是c++中没有让一个引用变成另一个引用这样的操作，所以我们必须自己实现赋值函数。





# 构造函数或者赋值函数

 在应用中我们可能会碰到不允许使用拷贝这样的操作，我们实现这个约束有两种方案。第一是声明这个函数，然后不实现他。这样的话能够实现这功能，但是报错的时候编译器不会报错

```cpp
#include <iostream>
using namespace std;

class my_class {
 public:
  my_class() {}
  my_class(const my_class& rhs);
};

int main() { 
  my_class m;
  my_class m2(m);
}
```

然后链接器重锤出击。

```
Undefined symbols for architecture x86_64:
  "my_class::my_class(my_class const&)", referenced from:
      _main in cc9GRPax.o
ld: symbol(s) not found for architecture x86_64
collect2: error: ld returned 1 exit status
```

 我也觉得这样有点坑爹。
<!---more-->
 正确的做法应该是将这些不希望被使用的函数显示定义为私有函数。这样的话在编译期就会被发现，然后报错。

```cpp
#include <iostream>
using namespace std;

class my_class {
  my_class(const my_class& rhs) {}

 public:
  my_class() {}
};

int main() {
  my_class m;
  my_class m2(m);
}
```



# virtual函数

 没有什么可说的，他就是为一个类添加了一个成员变量，每当你调用virtual函数的时候，会变成调用一个新的函数，在这个函数里面有一个局部的函数指针数组，根据编译器添加成员变量来决定接下来调用哪一个函数。于是就实现了多态。

## 无故添加virtual的后果

 如果你对一个不需要virtual的类添加了virtual函数，那么这个类的大小将扩大32位，如果你这个类本身就只有64位大小，那么他将因为你无故添加的virtual增大50%的体积。



# operator=的陷阱

 定义赋值函数难吗？难，真的特别难，如果你能看出下面的代码中赋值函数的问题，那你就懂为什么难了。

```cpp
#include <iostream>
using namespace std;

class my_class {
  int *p;

 public:
  my_class &operator=(const my_class &rhs) {
    delete p;
    p = new int(*rhs.p);
    return*this;
  }
};

int main() {}
```

<!---more-->
 这里的问题其实很明显，这个赋值不支持自我赋值。解决方案可以说在最前面特判掉自我赋值，或者是先拷贝最后再delete，又或者是用拷贝构造函数拷贝一份，然后swap来实现。







# 智能指针与引用计数型智能指针

 这里指的分别是auto_ptr&lt;T&gt; 和shared_ptr&lt;T&gt;

## 智能指针

 智能指针是一个模版类，他以一个类作为模版，当智能指针被析构的时候，他会去调用他保存的对象的析构函数。这样就达到了自动析构的效果，但是如果将一个智能指针赋值给另外一个智能指针的时候，如果不做处理就可能会导致智能指针指向的区域被多次析构函数，于是智能指针的解决方案是赋值对象会被设置为null。

## 引用计数型智能指针

 引用计数型智能指针采取了引用计数的方案来解决上诉问题，当引用数为0的时候才对指向的空间进行析构。





# 智能指针不经意间的内存泄漏

```cpp
#include <iostream>
#include <memory>
using namespace std;

int f() { return 1; }
int g(auto_ptr<int> p, int x) { return 1; }

int main() { g(auto_ptr<int>(new int(2)), f()); }
```

 上诉代码不会发生内存泄漏，但是若f函数会抛出异常，则可能发生。
 c++并没有规定上诉代码的执行顺序，我们不知道f函数什么时候被调用，若它发生在了new int(2)之后，auto_ptr构造前，那就凉凉了。new 了个int,没有传给auto_ptr,这里就泄漏了。





# 不要返回引用

 为了防止拷贝构造函数导致的额外开销，我们往往把函数的参数设为const &，我也曾一直想如果返回值也是const &,会不会更快

```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int>& f(int n) { 
  vector<int> res(100,0);
  res[0]=n;
  return res;
}

int main() {
  vector<int> a = f(10);
  a[0] = 1;
}
```

<!---more-->
 显然是错误的做法。你怎么可以想返回一个局部变量。
 然后是一个看似正确的做法。我们返回一个static内部变量。

```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int>& f(int n) { 
  static vector<int> res(100,0);
  res[0]=n;
  return res;
}

int main() {
  vector<int> a = f(10);
  a[0] = 1;
}
```

 在大多数情况下这确实是正确的做法。然而下面这个操作，

```cpp
int main() { cout << (f(0) == f(1)); }
```

 我不想解释为什么输出是1
 反正就是尽量少用这种引用就行了，单例模式除外。不用你去想着怎么优化这里，编译器会帮我们做。





# 全特化和偏特化

 这两个东西是针对模版而言的,比方说你定义了一个模版类，但是想对其中的某一个特殊的类做一些优化，这时候就需要这两个东西了。
 STL的vector&lt;bool&gt;就是这样一个东西，他重新为这个类写了一套代码。语法啥的不重要看看就行，我做了一些测试,记住优先级为
 全特化&gt;偏特化&gt;普通模版
<!---more-->

```cpp
#include <iostream>
#include <vector>
using namespace std;

// 模版
template <class T, class S>
class node {
 public:
  void print() { puts("模版"); }
};
// 偏特化
template <class S>
class node<int, S> {
 public:
  void print() { puts("偏特化"); }
};
// 全特化
template <>
class node<int, int> {
 public:
  void print() { puts("全特化"); }
};

// 函数模版
template <class T, class S>
void f(T a, S b) {
  puts("函数模版");
};
// 偏特化
template <class S>
void f(int a, S b) {
  puts("函数偏特化");
};
// 全特化
template <>
void f(int a, int b) {
  puts("函数全特化");
};

int main() {
  node<double, double> n1;
  node<int, double> n2;
  node<int, int> n3;
  n1.print();
  n2.print();
  n3.print();
  f(1.0,1.0);
  f(1,1.0);
  f(1,1);
}
```

 这个程序的输出是

```
模版
偏特化
全特化
函数模版
函数偏特化
函数全特化
```







# 降低编译依存关系

 很多大型c++项目如果编译的依存关系太复杂，则很有可能稍微修改一行代码就导致整个项目重新编译，这是很不友好的。

##  第一种方法是使用handle class

```cpp
#pragma once

namespace data_structure {

template <class T>
class handle {
 private:
  T* ptr;      // 句柄指向的指针
  int* count;  // 句柄引用计数器
 public:
  //构造函数
  handle(T* ptr) : ptr(ptr), count(new int(1)) {}
  // 拷贝构造函数
  handle(const handle<T>& rhs) : ptr(rhs.ptr), count(&++*rhs.count) {}
  //赋值函数
  const handle<T>& operator=(const handle<T>& rhs) {
    if (--*rhs.count == 0) delete ptr, count;
    ptr = rhs.ptr;
    count = &++*rhs.count;
    return *this;
  }

  ~handle() {
    if (--*count == 0) delete ptr, count;
  }

  T& operator*() { return *ptr; }
  T* operator->() { return ptr; }
  const T& operator*() const { return *ptr; }
  const T* operator->() const { return ptr; }
};

}  // namespace data_structure
```

 这就是一个简单的handle类，当然这个类并不能降低依存关系，因为他是一个模版类，所有的模版类都不能够被分离编译。但我们可以对专用的类构造一个专用的handle，即可实现分离编译。
<!---more-->

## 第二种方法是使用interface class

 这里不提供代码了，简单说就是使用基类制造存虚函数作为接口，实现多态。





# 分离模版类中的模版无关函数

 如果你有一个矩阵模版，模版中包含了行数和列数，而里面有一个类似于矩阵求逆的操作，虽然他与行列有关，但是因为这个函数非常的长，另一方面又有客户定义了许多矩阵，1*1的、2*2的、2*3的、3*2的等等，然后你的代码就会开始膨胀，这非常不友好，我们最好的做法是，定义一个基类，让基类传入行列参数去实现这些代码。这样我们的矩阵模版就不必将求逆这种很长很长的代码放进去了，直接继承就可以。
<!---more-->



# 模版元编程

&emsp;&emsp; 这种编程方式已经被证明具有图灵完备性了，即他能完成所有的计算工作。

## 模版元求阶乘

```cpp
#include <iostream>
using namespace std;


template <int n>
struct node {
  enum { value = n * node<n - 1>::value };
};
template <>
struct node<0> {
  enum { value = 1 };
};

int main(){
  cout<<node<10>::value<<endl;
}
```

<!---more-->

## 模版元筛素数

```cpp
#include <iostream>
using namespace std;

// 使用dp
// dp[n][i] = 1 表示对于x in [2,i] , n%x!=0
// 否则dp[n][i] = 0
// 于是dp[n][n-1] = 1的时候，n为素数
template <int n, int i>
struct is_prime {
  enum { value = (n % i) && is_prime<n, i - 1>::value };
};

template <int n>
struct is_prime<n, 1> {
  enum { value = 1 };
};

int main() {
  printf("%d %d\n", 2, is_prime<2, 2 - 1>::value);
  printf("%d %d\n", 3, is_prime<3, 3 - 1>::value);
  printf("%d %d\n", 4, is_prime<4, 4 - 1>::value);
  printf("%d %d\n", 5, is_prime<5, 5 - 1>::value);
  printf("%d %d\n", 6, is_prime<6, 6 - 1>::value);
  printf("%d %d\n", 7, is_prime<7, 7 - 1>::value);
}
```


## gcd和lcm

 有兴趣的读者可以去实现这两个东西，这里我就不提供代码了。



# policies设计

 这个设计目前对我而言，还有点深，先留个坑
 假设某个对象有大量的功能需求，这时候大多数人选择的设计方案是：设计一个全功能型接口。这样做会导致接口过于庞大已经难以维护。
 正确的做法是将功能正交分解，用多个类来维护这些接口，达到功能类高内聚，功能类间低耦合，然后使用多重继承来实现，并允许用户自己配置，这样的做法有一个很困难的地方，就是基类没有足够的信息知道派生类的类型。于是我们通过模版套娃，让派生类作为基类的模版参数。
&esp; 代码如下，笔者太菜，不敢自己写，不敢修改。
<!---more-->
[](https://www.cnblogs.com/crazyhf/archive/2012/10/02/2710350.html)

```cpp
#include <iostream>
#include <tr1/memory>

using std::cin;
using std::cout;
using std::endl;
using std::tr1::shared_ptr;

template <class T>
class CreatorNew {
 public:
  CreatorNew() { cout << "Create CreatorNew Obj ! " << endl; }

  ~CreatorNew() { cout << "Destroy CreatorNew Obj ! " << endl; }

  shared_ptr<T> CreateObj() {
    cout << "Create with new operator !" << endl;
    return shared_ptr<T>(new T());
  }
};

template <class T>
class CreatorStatic {
 public:
  CreatorStatic() { cout << "Create CreatorStatic Obj ! " << endl; }

  ~CreatorStatic() { cout << "Destroy CreatorStatic Obj ! " << endl; }

  T& CreateObj() {
    cout << "Create with static obj !" << endl;

    static T _t;

    return _t;
  }
};

template <template <class> class CreationPolicy>
class WidgetManager : public CreationPolicy<WidgetManager<CreationPolicy> > {
 public:
  WidgetManager() { cout << "Create WidgetManager Obj !" << endl; }

  ~WidgetManager() { cout << "Destroy WidgetManager Obj !" << endl; }
};

int main(int argc, char** argv) {
  cout << "------------- Create WidgetManager Object ! ------------" << endl;

  WidgetManager<CreatorNew> a_wid;

  WidgetManager<CreatorStatic> b_wid;

  cout << endl
       << "-- Create WidgetManager Object With CreateObj Method (New) ! --"
       << endl;

  a_wid.CreateObj();

  cout << endl
       << "-- Create WidgetManager Object With CreateObj Method (Static) ! --"
       << endl;

  b_wid.CreateObj();

  cout << endl
       << "------------ Destroy WidgetManager Object ! ------------" << endl;

  return 0;
}
```

## policies class 的析构函数

 先说结论，不要使用public继承，上诉代码是错误的，第二policies类不要使用虚析构函数，并且为虚构函数设为protect。

## policy 组合

 当我们在设计一个智能指针的时候，我们能够想到有两个方向：是否支持多线程，是否进行指针检查，这两个功能是正交的，这就实现了policy的组装

## 定制指针

 当我们设计智能指针的时候，我们不一定必须是传统指针，我们可以抽象指针为迭代器，缺省设置为一个既包含指针又包含引用的类。

# 静态断言检查器

 最前面给了一个基于构造长度为0的数组的断言检查，我的编译器似乎很强大，允许我这样操作了。。。。我们就忽略他吧
 现在考虑到模版，我们定义一个bool型的模版，对其中的true型偏特化进行实现，false型不实现，当我们用这个类构造的时候，true会被编译通过，但是false就不行了，
 第二种情况是，利用构造函数，似乎还是编译器原因，我的都能编译通过，我们也忽略吧。
 第三种情况，我们考虑用宏把msg替换成一个字符串，这样就OK了,报错的时候还能看到是啥错，你只要输入msg就可以。

```cpp
namespace program_check {

// 第一种静态检查方法
template <bool>
struct CompiledTimeError;

template <>
struct CompiledTimeError<true> {};

// 第二种静态检查的方法
template <bool>
struct CompiledTimeCheck {
CompiledTimeCheck(...){};
};

template <>
struct CompiledTimeCheck<false> {};

}  // namespace program_check

// 第一代静态检查器
#define STATIC_CHECK_1(expr) program_check::CompiledTimeError<(expr) != 0>()
// 第二代静态检查器,还能输出错误类型
//#define STATIC_CHECK_2(expr, msg)                                        \
{                                                                    \
class ERROR_##msg {};                                              \
(void)sizeof(                                                      \
program_check::CompiledTimeCheck<(expr) != 0>(ERROR_##msg())); \
}

// 我觉得都不太好，不如试试这个
#define STATIC_CHECK(expr,msg) \
(program_check::CompiledTimeError<(expr) != 0>(), "msg")

int main(int argc, char** argv) {
STATIC_CHECK(false,abssf );
}
```





# int2type

 int2type是一种技术，他把int映射为一个类型，从而能够让他对函数去实现重载，下面的程序就是一个很好的例子，注意我们的主函数里面用的是int2type&lt;2&gt;如果把2换成1，是无法编译的，因为int没有clone这个函数。
 如果我们不使用这种技术，而是在运行期使用if else来判断，这不可能，你无法通过编译，这事只能在编译器做。

```cpp
namespace trick {
template <int v>
struct int2type {
  enum { value = v };
};
}  // namespace trick
using namespace trick;

template <class T>
class node {
  T *p;

 public:
  void f(T x, int2type<1>) { p->clone(); }

  void f(T x, int2type<2>) {}

  void f(T x, int2type<3>) {}
};
int main() {
  node<int> a;
  a.f(1, int2type<2>());
}
```





# type2type

 这种技术类似与int2type,他用来解决函数不能偏特化的问题，当然现在的编译器似乎已经支持这个功能了。

```cpp
template <class T>
struct type2type {
  typedef T orignal_type;
};
```

 有了这个代码,我们能模拟出偏特化，甚至函数返回值的重载，而且这个类型不占任何空间。







# 类型选择器

 在泛型编程中，我们常常会碰到类型选择的问题，若一个类型配置有选择为是否多态，则我们可能需要通过这个bool的值来判断下一步是定义一个指针还是定义一个引用，这时候我们的类型选择器登场了

```cpp
namespace trick {
template <bool c, class T, class S>
struct type_chose {
  typedef T type;
};
template <class T, class S>
struct type_chose<false, T, S> {
  typedef S type;
};
}  // namespace trick
```

 type_choose&lt;false,int\*,int&&gt;::type就是int&,
 type_choose&lt;true,int\*,int&&gt;::type就是int\*,





 互斥锁与共享锁

```cpp
#include <bits/stdc++.h>

#include <mutex>
#include <shared_mutex>
#include <thread>
using namespace std;

void f(int id, int* _x, shared_mutex* _m) {
  int& x = *_x;
  shared_mutex& m = *_m;
  if (id & 1) {
    for (int i = 0; i < 3000; i++) {
      unique_lock<shared_mutex> lock(m);
      x++;
    }
  } else {
    for (int i = 0; i < 3000; i++) {
      shared_lock<shared_mutex> lock(m);
      int read = x;
      assert(x == read);
    }
  }
}

int main() {
  int x;
  shared_mutex m;
  thread a[10];
  for (int i = 0; i < 10; i++) a[i] = thread(f, i, &x, &m);
  for (int i = 0; i < 10; i++) a[i].join();
  cout << x << endl;
}
```

 递归锁

```cpp
#include <bits/stdc++.h>

#include <mutex>
#include <shared_mutex>
#include <thread>
using namespace std;

mutex m1;
recursive_mutex m2;

void f(int i){
  //unique_lock<mutex> lock(m1);
  unique_lock<recursive_mutex> lock(m2);
  if(i==0) return;
  else f(i-1);
}

int main() {
  f(10);
}
```

 超时锁，用于一定时间内获取锁，超时递归锁，同理




