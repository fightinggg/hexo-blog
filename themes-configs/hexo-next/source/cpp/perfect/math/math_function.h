#pragma once
namespace math {
template <class T>
T abs(const T& a) {
  return a > 0 ? a : -a;
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
T newton_sqrt(const T& x, const double& eps) {
  return sqrt(x);
  if (x == 0) return 0;
  assert(x > 0);
  T res = x;
  while (true) {
    T d = abs(res * res - x);
    if (d / x < eps) break;
    res = (res * res + x) / 2 / res;
  }
  return res;
}
const double PI = 3.1415926535897;
const double E = 2.71828182845904553488;

template <class T>
T sin(T x, const int& cnt) {
  if (x < 0) x = -x + PI;
  x = x - int(x / 2 / PI) * PI * 2;
  if (x < 0) x += 2 * PI;
  T x2 = x * x;
  T res = 0, d = x;
  for (int i = 1; i <= cnt; i++) {
    res += d;
    d *= -x2 / (2 * i) / (2 * i + 1);
  }
  return res;
}
template <class T>
T cos(T x, const int& cnt) {
  return sin(x + PI / 2, cnt);
}

// e^x = 1 + x + x^2/2 +x^3/2/3 + x^4/2/3/4
double taylor_exp(const double& x) {
  if (x < 0) return 1 / taylor_exp(-x);
  if (x > 0.0001) {  //快速幂
    double res = taylor_exp(x / 2);
    return res * res;
  }
  double res = 1, d = 1;
  for (int i = 1; i <= 10; i++) {
    d = d * x / i;
    res += d;
  }
  return res;
}

// 用牛顿迭代法求解lg(c)=x
// -> e^x=c
// -> f(x)=e^x-c
// -> f'(x) = e^x
// x-(x)/f'(x) = x-1+c/e^x
double newton_log(double c) {
  double res1 = 0, res2 = 0;
  while (c < E) c *= E, res1--;
  while (c > E) c /= E, res1++;
  for (int i = 0; i < 10; i++) res2 -= 1 - c / taylor_exp(res2);
  return res1 + res2;
}

}  // namespace math
