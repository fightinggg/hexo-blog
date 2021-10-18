#pragma once

namespace algorithm {
template <class T>
T abs(const T& a) {
  if (a < 0)
    return -a;
  else
    return a;
}
template <class T>
void swap(T& a, T& b) {
  T c = a;
  a = b;
  b = c;
}
template <class T>
T max(const T& a, const T& b) {
  if (a < b)
    return b;
  else
    return a;
}
template <class T>
T min(const T& a, const T& b) {
  if (a < b)
    return a;
  else
    return b;
}
template <class T>
void memset(T* s1_, char s, int n) {
  char* s1 = (char*)s1_;
  for (int i = 0; i < n; i++) s1[i] = s;
}

template <class T>
void memcpy(T* s1_, T* s2_, int n) {
  char *s1 = (char*)s1_, *s2 = (char*)s2_;
  for (int i = 0; i < n; i++) s1[i] = s2[i];
}

}  // namespace algorithm
