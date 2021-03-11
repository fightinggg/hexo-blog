/*
 *
 * 并非所有的算法都能保证正确性，所以我们这里需要做一些保证措施，来保证我们的算法无法设计时候，帮助自己一下，期待这里的函数越少越好
 *
 *
 *
 *
 *
 * */

#include "math/complex.h"
// MatrixXd m(2, 2);
//
//矩阵求逆无法保证正确性
template <class T>
void help_me_matrix_inv(T* a, int r, int c, T* inv) {
  using namespace Eigen;
  MatrixXd A(r, c);
  for (int i = 0; i < r; i++) {
    for (int j = 0; j < c; j++) {
      A(i, j) = a[i * c + j];
    }
  }
  A = A.inverse();
  for (int i = 0; i < r; i++) {
    for (int j = 0; j < c; j++) {
      inv[i * c + j] = A(i, j);
    }
  }
}

//特征值
template <class T>
void help_me_matrix_feature(T* a, int r, int c, complex<T>* val,
                            complex<T>* vec) {
  using namespace Eigen;
  Matrix<double, -1, -1> A(r, c);
  for (int i = 0; i < r; i++) {
    for (int j = 0; j < c; j++) {
      A(i, j) = a[i * c + j];
    }
  }
  EigenSolver<MatrixXd> eigensover(A);
  if (eigensover.info() != Success) abort();
  Matrix<complex<double>, -1, -1> eigen_values = eigensover.eigenvalues();
  Matrix<complex<double>, -1, -1> eigen_vectors = eigensover.eigenvectors();
  for (int i = 0; i < r; i++) {
    for (int j = 0; j < c; j++) {
      vec[i * c + j] = eigen_vectors(i, j);
    }
    val[i * 1 + 0] = eigen_values(i, 0);
  }
}


template <class T>
void help_me_matrix_mul(T*a,int ar,int ac,T*b,int br,int bc,T*c){
  using namespace Eigen;
  MatrixXd A(ar,ac),B(br,bc);
  for(int i=0;i<ar;i++){
    for(int j=0;j<ac;j++){
      A(i,j)=a[i*ac+j];
    }
  }
  for(int i =0;i<br;i++){
    for(int j=0;j<bc;j++){
      B(i,j)=b[i*bc+j];
    }
  }
  A*=B;
  for(int i=0;i<ar;i++){
    for(int j=0;j<bc;j++){
      c[i*bc+j]=A(i,j);
    }
  }
}
