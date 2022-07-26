#pragma once
namespace algorithm {

template <class T>
T *unique(T *a, T *b) {
  for (T *i = a + 1; i != b; i++) {
    if (*a != *i) *(++a) = *i;
  }
  return ++a;
}

template <class T>
T *lower_bound(T *a, T *b, const T &rhs) {
  while (a < b) {
    T *mid = a + (b - a) / 2;
    if (*mid < rhs)
      a = mid + 1;
    else
      b = mid;
  }
  return a;
}

}  // namespace algorithm
