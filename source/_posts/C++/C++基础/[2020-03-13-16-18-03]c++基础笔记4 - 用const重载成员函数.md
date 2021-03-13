---
date: 2020-03-13 16:18:03
updated: 2020-03-13 16:18:03
mathjax: true
---

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

# 重载带来的代码翻倍该如何处理？
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