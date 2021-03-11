#include <iostream>

namespace io {
void show(const int x) {
  std::cout << x;
  fflush(stdout);
}
void show(const float x) {
  std::cout << x;
  fflush(stdout);
}
void show(const double x) {
  std::cout << x;
  fflush(stdout);
}
void show(const char x) {
  std::cout << x;
  fflush(stdout);
}
void show(const long x) {
  std::cout << x;
  fflush(stdout);
}
}  // namespace io
