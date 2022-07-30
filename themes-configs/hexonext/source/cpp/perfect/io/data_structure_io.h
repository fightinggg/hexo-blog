
#include "general.h"
#include "../data_structure/c++.h"


namespace io {

void show(const data_structure::string& data, const int& x = 20) {
  for (const char& ch : data) show(ch);
  return ;
  if (false && 2 * x < data.size()) {
    for (int i = 0; i < x; i++) show(data[i]);
    show("...");
    for (int i = 0; i < x; i++) show(data[data.size() - x + i]);
  } else {
    for (const char& ch : data) show(ch);
  }
}
template <class T>
void show(const data_structure::vector<T>& v) {
  show('[');
  for (int i = 0; i < v.size(); i++) {
    if (i != 0) show(", ");
    show(v[i]);
  }
  show(']');
}

}  // namespace io
