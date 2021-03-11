#pragma once

#include "../data_structure/vector.h"

namespace syntactic_sugar {
data_structure::vector<int> range(int n) {
  data_structure::vector<int> res;
  res.reserve(n);
  for (int i = 0; i < n; i++) res.push_back(i);
  return res;
}
}  // namespace syntactic_sugar
