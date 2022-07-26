
namespace trick {

// 第一种静态检查方法
template <bool>
struct CompiledTimeError;

template <>
struct CompiledTimeError<true> {};

// 第二种静态检查的方法
template <bool>
struct CompiledTimeCheck {
  CompiledTimeCheck(...){};
};

template <>
struct CompiledTimeCheck<false> {};

}  // namespace trick

// 第一代静态检查器
#define STATIC_CHECK_1(expr) trick::CompiledTimeError<(expr) != 0>()
// 第二代静态检查器,还能输出错误类型
//#define STATIC_CHECK_2(expr, msg)                                       \
  {                                                                     \
    class ERROR_##msg {};                                               \
    (void)sizeof(trick::CompiledTimeCheck<(expr) != 0>(ERROR_##msg())); \
  }

// 我觉得都不太好，不如试试这个
#define STATIC_CHECK(expr, msg) (trick::CompiledTimeError<(expr) != 0>(), "msg")
