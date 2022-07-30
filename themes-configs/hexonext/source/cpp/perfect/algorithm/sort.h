#pragma once
#include "../data_structure/vector.h"
#include "general.h"

namespace algorithm {
//快速排序
// unstable
// time:   sita(n*lgn)   omiga(n*lgn)   O(n^2)
// memery  O(lgn)
template <class T>
void quicksort(T *a, T *b) {  //[a,b)
  T *l = a, *r = b - 1;
  if (l >= r) return;
  T *mid = l;
  // suppose that the little some is in [l,mid-1] and bound is in mid
  while (r > mid) {
    if (*r < *l)
      swap(*(++mid), *r);
    else
      r--;
  }
  swap(*l, *mid);
  quicksort(a, mid);
  quicksort(mid + 1, b);
}

//插入排序
// stable
// time:   sita(n^2) omiga(n)  O(n^2)
// memery: O(1)
void insertionsort(int *a, int *b) {
  for (int *i = a; i < b; i++) {
    int *j = i;
    while (j > a && *j < *(j - 1)) {  //可能每次都直接跳出去，结果成了omiga(n)
      swap(*j, *(j - 1));
      j--;
    }
  }
}

//选择排序
// unstable
// time:   sita(n^2) omiga(n^2)  O(n^2)
// memery: O(1)
void selectsort(int *a, int *b) {
  for (int *i = a; i < b; i++) {
    int *min = i;
    for (int *j = i + 1; j < b; j++) {
      if (*min > *j) min = j;
    }
    swap(*min, *i);
  }
}

//基数排序??
// unstable
// time:   omige(log(k,maxvalue)*n)  O(log(k,maxvalue)*n)
// memery:
void radixsort(int *a, int *b) {
  const int k = 15;
  data_structure::vector<int> bin[2][k + 1];  // 滚动数组
  int t = 0;

  for (int *i = a; i < b; i++) bin[t][(*i) & k].push_back(*i);
  t ^= 1;

  for (int times = 1; times < 8; times++) {
    for (int i = 0; i <= k; i++) bin[t][i].clear();
    for (int i = 0; i <= k; i++) {
      for (int x : bin[t ^ 1][i]) {
        bin[t][(x >> (4 * times)) & k].push_back(x);
      }
    }
    t ^= 1;
  }
  for (int i = 0; i < k; i++) {
    for (int x : bin[t ^ 1][i]) {
      *(a++) = x;
    }
  }
}

//计数排序??
// unstable
// time:   sita(maxvalue-minvalue) omiga(maxvalue-minvalue) O(maxvalue-minvalue)
// memery: O(maxvalue-minvalue)
void countingsort(int *a, int *b) {
  int maxvalue = (1 << 31);       // 最小的int
  int minvalue = -1 ^ (1 << 31);  // 最大的int
  for (int *i = a; i < b; i++) {
    maxvalue = max(maxvalue, *i);
    minvalue = min(minvalue, *i);
  }
  int *data = new int[maxvalue - minvalue + 1];
  memset(data, 0, sizeof(int) * (maxvalue - minvalue + 1));
  for (int *i = a; i < b; i++) data[(*i) - minvalue]++;
  for (int i = minvalue; i <= maxvalue; i++) {
    while (data[i - minvalue]--) *(a++) = i;
  }
  delete[] data;
}

//桶排序??
// time:   sita(k*O(sort(n/k))  omiga(k*O(sort(n/k))  O(k*O(sort(n/k))
// memery:
void bucketsort(int *a, int *b) {
  int maxvalue = (1 << 31);       // 最小的int
  int minvalue = -1 ^ (1 << 31);  // 最大的int
  for (int *i = a; i < b; i++) {
    maxvalue = max(maxvalue, *i);
    minvalue = min(minvalue, *i);
  }
  if (maxvalue == minvalue) return;
  const int k = 10;
  data_structure::vector<int> data[k];
  for (int *i = a; i < b; i++) {
    int belong = ((*i) - minvalue) / ((maxvalue - minvalue) / 10 + 1);
    data[belong].push_back(*i);
  }
  for (int i = 0; i < k; i++) {
    quicksort(data[i].begin(), data[i].end());
    for (int x : data[i]) *(a++) = x;
  }
}

//冒泡排序
// stable
// time： sita(n^2) omiga（n） O(n^2)
// memery: O(1)
void bubblesort(int *a, int *b) {
  for (int i = 0; i < b - a; i++) {
    bool noswap = true;
    for (int *j = a + 1; j < b - i; j++) {
      if (*(j - 1) > *j) {
        swap(*(j - 1), *j);
        noswap = false;
      }
    }
    if (noswap) break;
  }
}

//归并排序
// stable
// time:   sita(n*lgn) omiga(n*lgn) O(n*lgn)
// memery: O(n)
void mergesort(int *a, int *b) {
  int *mid = a + (b - a) / 2;  // =(a+b)/2
  if (a >= b - 1) return;

  mergesort(a, mid);
  mergesort(mid, b);

  int *c = new int[b - a];
  int *pa = a, *pm = mid, *pc = c;
  while (pa < mid && pm < b) {
    *(pc++) = *pa <= *pm ? *(pa++) : *(pm++);
  }
  while (pa < mid) *(pc++) = *(pa++);
  while (pm < b) *(pc++) = *(pm++);
  memcpy(a, c, sizeof(int) * (b - a));
}

//希尔排序
// unstable
// time:   sita(n^1.3) omiga(??) O(n^2)
// memery: O(1)
void shellsort(int *a, int *b) {
  for (int gap = (b - a) >> 1; gap; gap >>= 1) {  //枚举gap
    for (int *i = a + gap; i < b; i++) {
      int x = *i, *j = i;
      while (j - gap >= a && x < *(j - gap)) {
        *j = *(j - gap);
        j -= gap;
      }
      *j = x;
    }
  }
}

//堆排序
// unstable
// time:   sita(n*lgn)   omiga(n*lgn)   O(n*lgn)
// memery: O(1)
void heapsort(int *a, int *b) {
  const int n = b - a;
  a--;

  // up
  for (int i = 1; i <= n; i++) {  //建立大根堆
    int j = i;
    while (j != 1 && a[j] > a[j >> 1]) {  //不是根且比父亲大
      swap(a[j], a[j >> 1]);
      j >>= 1;
    }
  }

  // down
  for (int i = n; i >= 1; i--) {
    swap(a[1], a[i]);
    int cur = 1;
    while ((cur << 1) < i) {  //左儿子存在
      int son = (cur << 1 | 1) < i &&
                a[cur << 1 | 1] >
                    a[cur << 1];  //若满足此条件则son为1，代表着右儿子优先
      if (a[cur] < a[cur << 1 | son])
        swap(a[cur], a[cur << 1 | son]);
      else
        break;  //若优先的儿子都不能换
      cur = cur << 1 | son;
    }
  }
}

}  // namespace algorithm
