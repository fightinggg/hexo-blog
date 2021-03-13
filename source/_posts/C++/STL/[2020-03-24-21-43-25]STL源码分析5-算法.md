---
date: 2020-03-24 21:43:25
updated: 2020-03-24 21:43:25
mathjax: true
---

# 算法
 分为质变算法和非质变算法，一个会改变操作对象，另一个不会。

# accumulate
 这个强，accmulate(first,last,init),将[first,last)的值累加到init上
 accmulate(first,last,init,binary op),将[first,last)从左到右二元操作(init,*)到init上

# adjacent_difference
 666666666，adjacent_difference(first,last,result)差分都来了[first,last)差分到[result,*)
 6666666,自己定义的差分adjacent_difference(first,last,result,binary_op); 这个能自定定义减法，
 注意可以result设为first

# inner_product
 内积，inner_product(first1,last1,first2,init),加到init上然后返回。
 参数在加上一个binary_op1和binary_op2,init=binary_op1(init,binary_op2(eme1,eme2))

# 太强了，佩服的五体投地，明天继续学,看java去