#include <assert.h>

#include <iomanip>
#include <iostream>
#include <set>
#include <string>

#include "data_structure/c++.h"
using namespace data_structure;

vector<tree<int>*> tr;
vector<std::string> name;
vector<vector<int>> vec;
int a_tag_use_to_mid_search;
int debug = 0;
int data_bound = 100000;
int test_cnt = data_bound * 3;
int output = 1;

// 这个函数测试面向对象的拷贝构造函数
template <class T>
void test_copy(T a) {
  for (int i = 0; i < 1000; i++) a.insert(rand());
  T b = a;
  for (int i = 0; i < 1000; i++) b.insert(rand());
  T c = b;
  for (int i = 0; i < 1000; i++) a.insert(rand());
  for (int i = 0; i < 1000; i++) b.insert(rand());
  for (int i = 0; i < 1000; i++) c.insert(rand());
  a = b;
  c = b;
  for (int i = 0; i < 1000; i++) a.insert(rand());
  for (int i = 0; i < 1000; i++) b.insert(rand());
  for (int i = 0; i < 1000; i++) c.insert(rand());
}



int main() {
  srand(time(NULL));
  if (true) {
    test_copy(binary_search_tree<int>());
    test_copy(avl_tree<int>());
    test_copy(b_tree<int, 3>());
    test_copy(b_tree<int, 4>());
    test_copy(b_tree<int, 5>());
    test_copy(b_tree<int, 100>());
    test_copy(t_tree<int, 3>());
    test_copy(t_tree<int, 4>());
    test_copy(t_tree<int, 5>());
    test_copy(t_tree<int, 100>());
    test_copy(red_black_tree<int>());
    test_copy(left_leaning_red_black_tree<int>());
    test_copy(aa_tree<int>());
    test_copy(splay_tree<int>());
    test_copy(treap<int>());
    test_copy(no_rotate_treap<int>());
    test_copy(scapegoat_tree<int>());
    puts("深浅拷贝测试完毕");
    fflush(stdout);
    // return 0;
  }

  std::set<int> se;
  // tr.push_back(new binary_search_tree<int>());
  tr.push_back(new avl_tree<int>());
  tr.push_back(new b_tree<int, 3>());
  tr.push_back(new b_tree<int, 4>());
  tr.push_back(new b_tree<int, 5>());
  tr.push_back(new b_tree<int, 100>());
  tr.push_back(new t_tree<int, 3>());
  tr.push_back(new t_tree<int, 4>());
  tr.push_back(new t_tree<int, 5>());
  tr.push_back(new t_tree<int, 100>());
  tr.push_back(new red_black_tree<int>());
  tr.push_back(new left_leaning_red_black_tree<int>());
  tr.push_back(new aa_tree<int>());
  tr.push_back(new splay_tree<int>());
  tr.push_back(new treap<int>());
  tr.push_back(new no_rotate_treap<int>());
  tr.push_back(new scapegoat_tree<int>());

  // name.push_back("binary_search_tree<int>          ");
  name.push_back("avl_tree<int>                    ");
  name.push_back("b_tree<int, 3>                   ");
  name.push_back("b_tree<int, 4>                   ");
  name.push_back("b_tree<int, 5>                   ");
  name.push_back("b_tree<int, 100>                 ");
  name.push_back("t_tree<int, 3>                   ");
  name.push_back("t_tree<int, 4>                   ");
  name.push_back("t_tree<int, 5>                   ");
  name.push_back("t_tree<int, 100>                 ");
  name.push_back("red_black_tree<int>              ");
  name.push_back("left_leaning_red_black_tree<int> ");
  name.push_back("aa_tree<int>                     ");
  name.push_back("splay_tree<int>                  ");
  name.push_back("treap<int>                       ");
  name.push_back("no_rotate_treap<int>             ");
  name.push_back("scapegoat_tree<int>              ");

  vector<double> times_insert(tr.size()), times_erase(tr.size());
  double set_insert, set_erase;

  for (int xx = 0; xx < test_cnt; xx++) {
    //  if (debug) getchar();
    switch (rand() % 2) {
      case 0: {
        int x = xx % data_bound;
        //x = rand() % data_bound;
        if (debug && output) std::cout << "insert " << x << std::endl;
        for (int i = 0; i < tr.size(); i++) {
          time_t cur = clock();
          tr[i]->insert(x);
          times_insert[i] += clock() - cur;
        }
        for (tree<int>* t : tr) t->insert(x);

        time_t cur = clock();
        se.insert(x);
        set_insert += clock() - cur;
        break;
      }
      case 1: {
        int x = rand() % data_bound;
        if (debug && output) std::cout << "erase " << x << std::endl;
        for (int i = 0; i < tr.size(); i++) {
          time_t cur = clock();
          tr[i]->erase(x);
          times_erase[i] += clock() - cur;
        }
        time_t cur = clock();
        se.erase(x);
        set_erase += clock() - cur;
        break;
      }
    }
    if (rand() % 10000 == 0 || debug) {
      vector<int> v2;
      for (int x : se) v2.push_back(x);
      vec = vector<vector<int>>(tr.size());
      for (a_tag_use_to_mid_search = 0; a_tag_use_to_mid_search < tr.size();
           a_tag_use_to_mid_search++) {
        tr[a_tag_use_to_mid_search]->test();
        tr[a_tag_use_to_mid_search]->midorder(
            [](const int& w) { vec[a_tag_use_to_mid_search].push_back(w); });
      }
      if (debug)
        for (auto t : vec) {
          for (int x : t) std::cout << x << " ";
          std::cout << std::endl;
        }
      for (int i = 0; i < tr.size(); i++) assert(vec[i] == v2);
      if (output) std::cout << xx << " check ok ";
      fflush(stdout);
    }
  }
  std::cout << std::endl;
  std::cout << "set                               | insert " << std::fixed
            << std::setprecision(4) << set_insert / CLOCKS_PER_SEC
            << " | erase " << std::fixed << std::setprecision(4)
            << set_erase / CLOCKS_PER_SEC << " |" << std::endl;
  for (int i = 0; i < tr.size(); i++) {
    std::cout << name[i] << " | insert " << std::fixed << std::setprecision(4)
              << times_insert[i] / CLOCKS_PER_SEC << " | erase " << std::fixed
              << std::setprecision(4) << times_erase[i] / CLOCKS_PER_SEC << " |"
              << std::endl;
  }
  for (auto x : tr) delete x;
}
