#include <bits/stdc++.h>
using namespace std;

class point {
 public:
   int x;
  point() { cout << "1" << endl; }
  ~point(){cout<<"3"<<endl;}
  point(const point&p){cout<<"2"<<endl;}
};

point f() {
  point p;
  cout<<&p<<endl;
  return p;
}

int main() {
  const point&p2=f();
  cout<<(&p2)<<endl;
}
