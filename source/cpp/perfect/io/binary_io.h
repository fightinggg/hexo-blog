/****************************************
 * Author: 汪圣翔
 * Date: 2020-03-09
 * Description: 实现输入输出库
 ****************************************/

#pragma once
namespace io {
// 文件长度提取(文件不超过2G)
// 输入: 文件名字
// 输出: 文件的字节数量
int file_size(const char* filename) {
  FILE* pf = fopen(filename, "r");
  fseek(pf, 0, SEEK_END);
  int res = ftell(pf);
  fclose(pf);
  return res;
}
// 文件读取
// 输入: 文件名
// 输入: 要读取的字符量
// 输入: 要读取的缓冲区
// 输出: 缓冲区
void read(const char* filename, int size, char* buf) {
  FILE* pf = fopen(filename, "r");
  fread(buf, sizeof(char), size, pf);
  fclose(pf);
}
};  // namespace io
