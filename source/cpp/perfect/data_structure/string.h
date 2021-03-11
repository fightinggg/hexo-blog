/****************************************
 * Author: 汪圣翔
 * Date: 2020-03-09
 * Description: 实现字符串库
 ****************************************/

#pragma once

#include "vector.h"

namespace data_structure {
class string {
  vector<char> _data;
  static bool _mp[256];
  static bool* mp;

 public:
  string() : _data(1, 0) {}
  string(const char* s) {
    int n = 0;
    while (s[n]) n++;
    _data.reserve(n);
    for (int i = 0; i < n; i++) _data.push_back(s[i]);
    _data.push_back(0);
  }
  string(const int& n, const char& ch = ' ') : _data(n, ch) {
    _data.push_back(0);
  }
  char& front() const { return _data.front(); }
  char& back() const { return _data[size() - 1]; }
  char* begin() const { return _data.begin(); }
  char* end() const { return _data.end() - 1; }
  void push_back(const char& ch) {
    _data.back() = ch;
    _data.push_back(0);
  }
  void pop_back() {
    _data.pop_back();
    _data.back() = 0;
  }
  int size() const { return _data.size() - 1; }
  char& operator[](int x) const { return _data[x]; }
  bool operator==(const string& s) const { return _data == s._data; }
  bool operator!=(const string& s) const { return _data != s._data; }
  bool operator<(const string& s) const { return _data < s._data; }
  string operator+=(const string& ch) { return *this = *this + ch; }
  string operator+(const string& ch) {
    string tmp(size() + ch.size() + 1);
    for (int i = 0; i < size(); i++) tmp[i] = _data[i];
    for (int i = 0; i < ch.size(); i++) tmp[size() + i] = ch[i];
    tmp.push_back(0);
    return tmp;
  }
  char* data() const { return _data.data(); }
  string lower() const {
    string res = *this;
    for (char& ch : res) {
      if (ch >= 'A' && ch <= 'Z') ch += 'a' - 'A';
    }
    return res;
  }
  // 分割字符串
  // 功能 使用指定字符集，分割字符串
  // 输入 字符串s, 表示指定的字符集
  // 输出 分割后的字符串数组
  vector<string> split(const string& s = " ") const {
    for (char ch : s) mp[ch] = true;
    vector<string> res(1, "");
    for (char ch : *this) {
      if (mp[ch])
        res.push_back("");
      else
        res.back().push_back(ch);
    }
    for (char ch : s) mp[ch] = false;
    return res;
  }
  // 字符替换
  // 功能: 使用指定的字符集，将这些字符替换为另一个字符
  // 输入: 字符串s,表示指定的字符集
  // 输入: 字符t，表示将字符集s中的字符替换为t
  // 输出: 替换后的结果字符串
  string replace(const string& s, const char& t) const {
    for (char ch : s) mp[ch] = true;
    string res = "";
    for (char ch : *this) {
      if (mp[ch])
        res.push_back(t);
      else
        res.push_back(ch);
    }
    for (char ch : s) mp[ch] = false;
    return res;
  }
};

bool string::_mp[256] = {};
bool* string::mp = string::_mp + 128;

}  // namespace data_structure
