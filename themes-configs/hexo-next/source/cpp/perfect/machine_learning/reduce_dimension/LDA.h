#pragma once
#include <Eigen/Dense>
#include <iostream>
#include <vector>

Eigen::MatrixXd LDA(const Eigen::MatrixXd& input, std::vector<int> tag,
                    const int ntop) {
  using namespace std;
  using namespace Eigen;

  int r = input.rows();
  int c = input.cols();

  // 计算类的个数
  vector<int> v = tag;
  sort(v.begin(), v.end());
  v.erase(unique(v.begin(), v.end()), v.end());
  int type_size = v.size();

  // 计算每一类的个数
  vector<int> n(type_size, 0);
  for (int j = 0; j < c; j++) {
    int type = lower_bound(v.begin(), v.end(), tag[j]) - v.begin();
    tag[j] = type;
    n[type]++;
  }
  // 分类
  vector<MatrixXd> cls;
  vector<int> tmp(r);
  for (int type = 0; type < type_size; type++)
    cls.push_back(MatrixXd(r, n[type]));
  for (int j = 0; j < c; j++) {
    int t = tag[j];
    for (int i = 0; i < r; i++) cls[t](i, tmp[t]) = input(i, j);
    tmp[t]++;
  }


  // 计算m_mean和m[i]
  vector<VectorXd> m;
  VectorXd m_mean = MatrixXd::Zero(r, 1);
  for (int type = 0; type < type_size; type++) {
    m.push_back(cls[type].rowwise().mean());
    m_mean += m[type] * n[type];
  }
  m_mean /= c;

  // 计算SB
  MatrixXd SB = MatrixXd::Zero(r, r);
  for (int type = 0; type < type_size; type++) {
    VectorXd x = m[type] - m_mean;
    SB += n[type] * x * x.transpose();
  }

  // 计算SW
  MatrixXd SW = MatrixXd::Zero(r, r);
  for (int type = 0; type < type_size; type++) {
    MatrixXd x = cls[type].colwise() - m[type];  // 这里是Si =  sum {x - mi}
    SW += x * x.transpose();
    cout<<"S["<<type_size<<"]"<<endl;
  }

  EigenSolver<MatrixXd> es(-SW.completeOrthogonalDecomposition().pseudoInverse() * SB);  // 计算特征向量
  Matrix<complex<double>, -1, -1> vec = es.eigenvectors();
//  cout<<es.eigenvalues()<<endl;
  MatrixXd vec2(r, r);
  for (int i = 0; i < r; i++) {
    for (int j = 0; j < r; j++) vec2(i, j) = vec(i, j).real();
  }
  //cout<<vec2.transpose()*input<<endl;
  return vec2.block(0, 0, r,ntop).transpose();
}












