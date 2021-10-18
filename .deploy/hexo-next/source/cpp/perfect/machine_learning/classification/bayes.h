#pragma once

#include "../../data_structure/vector.h"
#include "../../math/math_function.h"

namespace machine_learning {
class bayes_classification {
 public:
  double pre_p1, pre_p2;
  data_structure::vector<double> likeihood1, likeihood2;

  void fit(const data_structure::vector<data_structure::vector<int>>& train,
           const data_structure::vector<int>& tag) {
    // 第一步计算先验概率
    pre_p1 = 0;
    for (int x : tag) pre_p1 += x==1;
    pre_p1 /= tag.size();
    pre_p2 = 1 - pre_p1;

    // 第二步计算条件概率
    likeihood1 = data_structure::vector<double>(train[0].size(), 0);
    likeihood2 = data_structure::vector<double>(train[0].size(), 0);
    double x = 0, y = 0;
    for (int i = 0; i < train[0].size(); i++) {
      for (int j = 0; j < train.size(); j++) {
        if (tag[j]==1) {
          x += train[j][i];
          likeihood1[i] += train[j][i];
        } else {
          y += train[j][i];
          likeihood2[i] += train[j][i];
        }
      }
    }

    // +1平滑
    for (double& i : likeihood1) i = (i + 1) / (x + 2);
    for (double& i : likeihood2) i = (i + 1) / (x + 2);

    // 取对数提高精度
    pre_p1 = math::newton_log(pre_p1);
    pre_p2 = math::newton_log(pre_p2);
    for (double& i : likeihood1) i = math::newton_log(i);
    for (double& i : likeihood2) i = math::newton_log(i);
  }
  data_structure::vector<int> predict(
      const data_structure::vector<data_structure::vector<int>>& test) {
    data_structure::vector<int> res;
    for (auto x : test) {
      double a = pre_p1, b = pre_p2;
      for (int i = 0; i < x.size(); i++) {
        a += x[i] * likeihood1[i];
        b += x[i] * likeihood2[i];
      }
      res.push_back(a > b?1:-1);
    }
    return res;
  }
};
}  // namespace machine_learning
