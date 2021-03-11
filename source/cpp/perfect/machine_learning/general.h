/****************************************
 * Author: 汪圣翔
 * Date: 2020-03-10
 * Description:   机器学习常用的函数
 *
 */

#pragma once
#include "../algorithm/general.h"
#include "../algorithm/random.h"
#include "../data_structure/vector.h"
#include "../syntactic_sugar/general.h"

namespace machine_learning {
// 划分训练集与测试集为x:y
template <class T, class S>
void split_to_train_test(data_structure::vector<T>& v,
                         data_structure::vector<S>& v_tag,
                         data_structure::vector<T>& train,
                         data_structure::vector<S>& train_tag,
                         data_structure::vector<T>& test,
                         data_structure::vector<S>& test_tag, double x,
                         double y) {
  int n = v.size();
  int n1 = n * x / (x + y);
  train.clear();
  test.clear();
  data_structure::vector<int> rd =
      algorithm::random_shuffle(syntactic_sugar::range(n));
  for (int i = 0; i < n1; i++) {
    int j = rd[i];
    train.push_back(v[j]);
    train_tag.push_back(v_tag[j]);
  }
  for (int i = n1; i < v.size(); i++) {
    int j = rd[i];
    test.push_back(v[j]);
    test_tag.push_back(v_tag[j]);
  }
}

}  // namespace machine_learning
