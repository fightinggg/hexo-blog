#include <assert.h>

#include <iostream>
#include <queue>

#include "data_structure/c++.h"
using namespace data_structure;

int debug = 0;

int main() {
  std::priority_queue<int> q;
  vector<heap<int>*> hp;
  hp.push_back(new binary_heap<int>());
  hp.push_back(new binomial_heap<int>());
  hp.push_back(new pairing_heap<int>());
  hp.push_back(new fibonacci_heap<int>());
  hp.push_back(new leftist_heap<int>());
  hp.push_back(new skew_heap<int>());
  for (int xx = 0; xx < 100; xx++) {
    if (xx % 100000 == 0) {
      std::cout << "ok" << xx << "size = " << q.size() << std ::endl;
    }
    int op = (rand() % 5) / 2;
    // 0 1 2 3 4
    // 0 0 1 1 2
    switch (op) {
      case 0: {
        int w = rand();
        if (debug) std::cout << "push " << w << std::endl;
        q.push(w);
        for (auto p : hp) p->push(w);
        break;
      }
      case 1: {
        if (q.empty()) continue;
        if (debug) {
          std::cout << "top ";
          std::cout << q.top() << "    ";
          for (auto p : hp) std::cout << p->top() << " ";
          std::cout << std::endl;
        }
        for (auto p : hp) assert(p->top() == q.top());
        break;
      }
      case 2: {
        if (q.empty()) continue;
        q.pop();
        if (debug) std::cout << "pop " << std::endl;
        for (auto p : hp) p->pop();
        break;
      }
    }
  }
  for (auto x:hp) delete x;
  return 0;
}
