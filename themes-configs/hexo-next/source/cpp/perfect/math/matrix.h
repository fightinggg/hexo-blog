#pragma once

#include "../algorithm/c++.h"
#include "../data_structure/vector.h"
#include "../help_me.h"
#include "../math/complex.h"
#include "../math/math_function.h"
#include "../memery_management/memery_pool.h"

template <class T>
class matrix {
  T* data;
  memery_pool<T> pool;

 public:
  int r, c;
  // 构造函数、赋值函数、析构函数
  matrix() {
    r = c = 0;
    data = pool.get_array(r * c);
  }
  matrix(const vector<matrix<T>>& rhs) : r(0), c(0) {
    for (int i = 0; i < rhs.size(); i++) {
      r = rhs[i].r;
      c += rhs[i].c;
    }
    data = pool.get_array(r * c);
    int col = 0;
    for (int _ = 0; _ < rhs.size(); _++) {
      for (int j = 0; j < rhs[_].c; j++) {
        set_sub_matrix(0, r, col, col + 1, rhs[_].sub_matrix(0, r, j, j + 1));
        col++;
      }
    }
  }
  matrix(const vector<vector<T>>& rhs) {
    r = rhs.size();
    c = rhs[0].size();
    data = pool.get_array(r * c);
    for (int i = 0; i < r; i++) {
      for (int j = 0; j < c; j++) (*this)[i][j] = rhs[i][j];
    }
  }
  matrix(int r, int c) : r(r), c(c) {
    data = pool.get_array(r * c);
    algorithm::memset(data, 0, sizeof(T) * r * c);
  }
  matrix(const matrix<T>& rhs) : r(rhs.r), c(rhs.c) {
    data = pool.get_array(r * c);
    for (int i = 0; i < r; i++) {
      for (int j = 0; j < c; j++) (*this)[i][j] = rhs[i][j];
    }
  }
  matrix<T>& operator=(const matrix<T>& rhs) {
    pool.erase_array(data, r * c);
    r = rhs.r;
    c = rhs.c;
    data = pool.get_array(r * c);
    for (int i = 0; i < r; i++) {
      for (int j = 0; j < c; j++) (*this)[i][j] = rhs[i][j];
    }
    return *this;
  }
  ~matrix() { pool.erase_array(data, r * c); }
  static inline matrix<T> eye(int n) {
    matrix<T> res(n, n);
    algorithm::memset(res.data, 0, sizeof(T) * n * n);
    for (int i = 0; i < n; i++) res[i][i] = 1;
    return res;
  }

  // 内存访问函数
  inline T* operator[](int x) const { return data + x * c; }

  //矩阵运算操作
  inline matrix<T> operator+=(const matrix<T>& rhs) {
    assert(r == rhs.r && c == rhs.c);
    int n = r * c;
    for (int i = 0; i < n; i++) data[i] += rhs.data[i];
    return *this;
  }
  inline matrix<T> operator-=(const matrix<T>& rhs) {
    assert(r == rhs.r && c == rhs.c);
    int n = r * c;
    for (int i = 0; i < n; i++) data[i] -= rhs.data[i];
    return *this;
  }
  inline matrix<T> operator*=(const matrix<T>& rhs) {
    if (r * c * rhs.c > 1e5) {
      matrix<T> res(r, rhs.c);
      help_me_matrix_mul(data, r, c, rhs[0], rhs.r, rhs.c, res[0]);
      algorithm::swap(res, *this);
      return *this;
    }
    assert(c == rhs.r);
    matrix<T> res(r, rhs.c);
    for (int i = 0; i < r; i++) {
      for (int j = 0; j < rhs.c; j++) {
        T x = 0;
        for (int k = 0; k < c; k++) x += (*this)[i][k] * rhs[k][j];
        res[i][j] = x;
      }
    }
    algorithm::swap(res, *this);
    return *this;
  }
  inline matrix<T> operator+(const matrix<T>& rhs) {
    matrix<T> res = *this;
    return res += rhs;
  }
  inline matrix<T> operator-(const matrix<T>& rhs) {
    matrix<T> res = *this;
    return res -= rhs;
  }
  inline matrix<T> operator*(const matrix<T>& rhs) {
    matrix<T> res = *this;
    return res *= rhs;
  }
  template <class T2>
  inline friend matrix<T> operator*(const T2& k, const matrix<T>& rhs) {
    matrix<T> res(rhs);
    int n = rhs.r * rhs.c;
    for (int i = 0; i < n; i++) res.data[i] *= k;
    return res;
  }

  template <class T2>
  inline friend matrix<T> operator*(const matrix<T>& rhs, const T2& k) {
    return k * rhs;
  }

  template <class T2>
  inline friend matrix<T> operator/(const matrix<T>& rhs, const T2& k) {
    matrix<T> res(rhs);
    int n = rhs.r * rhs.c;
    for (int i = 0; i < n; i++) res.data[i] /= k;
    return res;
  }

  template <class T2>
  inline friend matrix<T> operator*=(matrix<T>& rhs, const T2& k) {
    return rhs = k * rhs;
  }

  template <class T2>
  inline friend matrix<T> operator/=(matrix<T>& rhs, const T2& k) {
    return rhs = rhs / k;
  }

  inline T dot(const matrix<T>& rhs) { return (transpose() * rhs)[0][0]; }

  // 行线性变换
  void line_swap(int a, int b) {
    for (int j = 0; j < c; j++) algorithm::swap((*this)[a][j], (*this)[b][j]);
  }
  void line_add(int a, T k, int b) {
    for (int j = 0; j < c; j++) (*this)[a][j] += k * (*this)[b][j];
  }
  void line_mul(int a, T k) {
    for (int j = 0; j < c; j++) (*this)[a][j] *= k;
  }
  void line_div(int a, T k) {
    for (int j = 0; j < c; j++) (*this)[a][j] /= k;
  }

  inline matrix<T> transpose() {
    matrix<T> res(c, r);
    for (int i = 0; i < r; i++) {
      for (int j = 0; j < c; j++) {
        res[j][i] = (*this)[i][j];
      }
    }
    return res;
  }
  inline matrix<T> mean(int op) {
    if (op == 0) {
      matrix<T> res(1, c);
      algorithm::memset(res.data, 0, sizeof(T) * c);
      for (int j = 0; j < c; j++) {
        for (int i = 0; i < r; i++) res[0][j] += (*this)[i][j];
        res[0][j] /= r;
      }
      return res;
    } else {
      matrix<T> res(r, 1);
      algorithm::memset(res.data, 0, sizeof(T) * r);
      for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) res[i][0] += (*this)[i][j];
        ;
        res[i][0] /= c;
      }
      return res;
    }
  }
  matrix<T> sub_matrix(int r1, int r2, int c1, int c2) {
    matrix<T> res(r2 - r1, c2 - c1);
    for (int i = r1; i < r2; i++) {
      for (int j = c1; j < c2; j++) {
        res[i - r1][j - c1] = (*this)[i][j];
      }
    }
    return res;
  }
  void set_sub_matrix(int r1, int r2, int c1, int c2, const matrix<T>& rhs) {
    for (int i = r1; i < r2; i++) {
      for (int j = c1; j < c2; j++) {
        (*this)[i][j] = rhs[i - r1][j - c1];
      }
    }
  }
  vector<matrix<T>> split_to_col_matrix() {
    vector<matrix<T>> res;
    for (int j = 0; j < c; j++) res.push_back(sub_matrix(0, r, j, j + 1));
    return res;
  }

  inline T norm_inf() {
    T res = 0;
    for (int i = 0; i < r; i++)
      res = math_function::max(res, math_function::abs(data[i]));
    return res;
  }
  inline T norm2() {
    T res = 0;
    for (int i = 0; i < r; i++) res += data[i] * data[i];
    return res;
  }
  inline T norm1(const T& eps) {
    return math_function::newton_sqrt(norm2(), eps);
  }

  // 矩阵的正交化+单位化
  matrix<T> gram_schmidt(const T& eps) {
    vector<matrix<T>> col = split_to_col_matrix();
    for (int j = 0; j < c; j++) {
      for (int jj = 0; jj < j; jj++) {
        col[j] -= col[j].dot(col[jj]) * col[jj];
      }
      col[j] /= col[j].norm1(eps);
    }
    return matrix<T>(col);
  }

  void QR_decomposition(matrix<T>& Q, matrix<T>& R, const T& eps) {
    Q = gram_schmidt(eps);
    R = Q.transpose() * (*this);
  }

  matrix<T> diag_to_row() {
    matrix<T> res(1, c);
    for (int i = 0; i < r; i++) res[0][i] = (*this)[i][i];
  }
  matrix<T> diag_to_col() {
    matrix<T> res(r, 1);
    for (int i = 0; i < r; i++) res[i][0] = (*this)[i][i];
  }

  void feature_QR(matrix<complex<T>>& val, matrix<complex<T>>& vec,
                  const T& eps) {
    vec = matrix<complex<T>>(r, r);
    val = matrix<complex<T>>(r, 1);
    help_me_matrix_feature(data, r, c, val[0], vec[0]);
    return;
    /*
    // 下面的代码有问题，
    T u = 2 * feature_value_power(eps);
    // u=0.1;
    matrix<T> tem(*this);
    for (int i = 0; i < r; i++) tem[i][i] -= u;  // tem = A - UE
    tem.show();
    val = tem.feature_value_QR(eps);
    for (int i = 0; i < val.size(); i++) printf("%f ", val[i] + u);
    fflush(stdout);
    for (int i = 0; i < val.size(); i++) {
      val[i] += u;
      vec.push_back(feature_vector(val[i], eps));
    }*/
  }

  T feature_value_power(const T& eps) {
    matrix<T> res(r, 1);
    res[0][0] = 1;
    T t1 = res.norm_inf();
    while (true) {
      res = (*this) * res;
      T t2 = res.norm_inf();
      res /= t2;
      if (abs((t1 - t2) / t2) < eps)
        break;
      else
        t1 = t2;
    }
    return t1;
  }

  vector<T> feature_value_QR(const T& eps) {
    matrix<T> cur = *this;
    while (true) {
      matrix<T> Q = cur.gram_schmidt(eps);
      Q = Q.transpose() * cur * Q;
      T d = 0;
      for (int i = 0; i < r; i++) d += math_function::abs(Q[i][i] - cur[i][i]);
      cur = Q;
      if (d < eps) break;
      // printf("?\n");
      // fflush(stdout);
      //  matrix<T> R = Q.transpose() * cur;
      // cur = R * Q;
      // printf("Q,R,RQ,QR\n");
      // Q.show();
      // R.show();
      // (R*Q).show();
      // (Q*R).show();
      // printf("%f ", x);
      //  getchar();
    }
    vector<T> res;
    for (int i = 0; i < cur.c; i++) res.push_back(cur[i][i]);
    algorithm::quicksort(res.begin(), res.end());
    res.erase(algorithm::unique(res.begin(), res.end()), res.end());
    return res;
  }

  matrix<T> feature_vector(const T& feature_value, const T& eps) {
    matrix<T> t = (feature_value * eye(r) - (*this)).base_solve(eps);  // k*E-A
    // ((*this)*t).show();
    // (feature_value*t).show();
    return t;
  }

  matrix<T> feature_vector_jacobi(const T& eps) {
    // 这个方法要求对称矩阵
    matrix<T> a = *this;
    int n = r;
    assert(n >= 2);
    int cnt = 100;
    while (cnt--) {
      int p = 0, q = 1;
      for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++)
          if (i != j && abs(a[i][j]) > abs(a[p][q])) p = i, q = j;
      }
      T pp = a[p][p];
      T pq = a[p][q];
      T qq = a[q][q];
      T angle = 0.5 * atan2(-2 * pq, qq - pp);
      T si = sin(angle);
      T co = cos(angle);

      matrix<T> J = eye(n);
      J[p][p] = J[q][q] = co;
      J[p][q] = -si;
      J[q][p] = si;
      matrix<T> b = J.transpose() * a * J;
      T d = 0;
      for (int i = 0; i < n; i++) d += math_function::abs(a[i][i] - b[i][i]);
      a = b;
      if (d < eps) break;
    }
    a.show();
    return a;
  }

  matrix<T> inv_using_Gauss(T eps) {
    matrix<T> res(r, c);
    help_me_matrix_inv(data, r, c, res[0]);
    return res;
    assert(r == c);
    int n = r;
    matrix<T> a(n, 2 * n);
    a.set_sub_matrix(0, n, 0, n, *this);
    a.set_sub_matrix(0, n, n, 2 * n, eye(n));
    vector<int> x, y;
    return a.to_ladder(x, y, eps).sub_matrix(0, n, n, 2 * n);
  }

  matrix<T> to_ladder(vector<int>& zero_col, vector<int>& non_zero_col,
                      const T& eps) {
    assert(zero_col.size() == 0 && non_zero_col.size() == 0);
    matrix<T> a(*this);
    int i = 0, j = 0;  // 分界线
    while (i < r && j < c) {
      if (a[i][j] < eps) {
        for (int ii = i; ii < r; ii++) {
          if (a[ii][j] > eps) {
            a.line_swap(i, ii);
            break;
          } else {
            a[ii][j] = 0;
          }
        }
      }
      if (a[i][j] > eps) {
        a.line_div(i, a[i][j]);
        for (int ii = i + 1; ii < r; ii++) a.line_add(ii, -a[ii][j], i);
        non_zero_col.push_back(j);
        i++, j++;
      } else {
        zero_col.push_back(j);
        j++;
      }
    }
    for (int _ = 0; _ < non_zero_col.size(); _++) {
      int j = non_zero_col[_];
      for (int i = 0; i < _; i++) a.line_add(i, -a[i][j], _);
    }
    return a;
  }

  matrix<T> base_solve(const T& eps) {
    // printf("准备解齐次方程：\n");
    // show();
    vector<int> zero_col, non_zero_col;
    matrix<T> a = to_ladder(zero_col, non_zero_col, eps);
    //  printf("行变换\n");
    //  a.show();
    // get res
    matrix<T> res(r, zero_col.size());
    for (int _ = 0; _ < zero_col.size(); _++) {
      int j = zero_col[_];  // 0 列
      for (int i = 0; i < non_zero_col.size(); i++) {
        int row = non_zero_col[i];
        res[row][_] = -a[i][j];
      }
      res[j][_] = 1;
    }
    // printf("solve\n");
    //  res.show();
    return res;
  }
  void show() const {
    for (int i = 0; i < algorithm::min(10, r); i++) {
      for (int j = 0; j < algorithm::min(10, c); j++) {
        printf("%12.6f ", 1.0 * (*this)[i][j]);
      }
      printf("\n");
    }
    printf("\n");
    fflush(stdout);
  }
};
