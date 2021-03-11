namespace trick {
template <bool c, class T, class S>
struct type_chose {
  typedef T type;
};
template <class T, class S>
struct type_chose<false, T, S> {
  typedef S type;
};
}  // namespace trick
