#pragma once
#include <Eigen/Dense>
#include <iostream>
#include <vector>

Eigen::MatrixXd PCA(Eigen::MatrixXd input, const int ntop) {
  using namespace std;
  using namespace Eigen;

  int r = input.rows();
  int c = input.cols();

  VectorXd center = input.rowwise().mean();        // 计算均值 r*1
  MatrixXd del_center = input.colwise() - center;  // 去中心化
  MatrixXd cov = del_center * del_center.transpose() / (r - 1);  // 求协方差矩阵
  // 求解对称矩阵的特征,这里用负数的原因是Eigen库解出来的特征值是从小到大的，加个符号改变顺序
  SelfAdjointEigenSolver<MatrixXd> eig(-cov);
  MatrixXd vec = eig.eigenvectors();  //特征向量
  MatrixXd val = eig.eigenvalues();   // 特征值
  cout << vec << endl << val << endl;
  //cout<<vec.transpose()*input<<endl;
  return vec.block(0,0,r,ntop).transpose();
}
