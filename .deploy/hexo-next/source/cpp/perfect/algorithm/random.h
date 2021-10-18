#pragma once

#include "general.h"
#include "../data_structure/vector.h"

namespace algorithm {

unsigned long long ___k1=9527, ___k2=7259;
void srand(int x) {
  ___k1 = x;
  ___k2 = x * x + x * x * x + 1 + 2 * x + 3 * x * x;
}
unsigned long long rand() {
  unsigned long long k3 = ___k1, k4 =___k2;
  ___k1 = k4;
  k3 ^= k3 << 23;
  ___k2 = k3 ^ k4 ^ (k3 >> 17) ^ (k4 >> 26);
  return ___k2 + k4;
}
int rand(int x, int y) { return rand() % (y - x + 1) + x; }

template<class T>
data_structure::vector<T> random_shuffle(data_structure::vector<T> x) {
  for (int i = 0; i < x.size(); i++) {
    int a = rand(1, x.size() - 1);
    int b = rand(1, x.size() - 1);
    swap(x[a], x[b]);
  }
  return x;
}

}  // namespace algorithm
