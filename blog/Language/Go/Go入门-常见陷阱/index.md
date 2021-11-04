---
date: 2021-11-03 09:36:00
updated: 2021-11-03 09:36:00
clickbait:
  - Go 陷阱
---



# 1. Go 的指针

Go的指针和C的指针很类似，这也是Go被归类于C类语言的原因，Go的指针不支持偏移运算，即不能向C一样让指针+1，-1。

## 1.1. 正常使用

先来看第一个，符号`&`即可取到对象的地址。

```go
func sample1() {
	arr1 := []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}

	fmt.Println(arr1)

	fmt.Println(&arr1)
}
```

```
[0 1 2 3 4 5 6 7 8 9]
&[0 1 2 3 4 5 6 7 8 9]
```

## 1.2. for循环问题

下面的输出全是9，因为for循环的value是共用一个地址的。

```go
func sample2() {
	arr1 := []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}

	mp := map[int]*int{}

	for i, value := range arr1 {
		mp[i] = &value
	}


	for i, _ := range arr1 {
		fmt.Println(*mp[i])
	}
}
```





# 2. Go 的 new 和 make

[参考](https://www.jianshu.com/p/0edd447d9efb)

new 只分配内存，make不仅分配内存还初始化对象。

slice、chan、map一般可以使用make初始化。













