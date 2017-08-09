/**
 * Created by MingYin Lv on 2017/7/9.
 */

/**
 * findIndex和findLastIndex的基础方法
 * @param array 查找的数组
 * @param predicate 查找的方法
 * @param fromIndex 开始位置
 * @param [fromRight] 查找方向 false 从左往右  true 从右往左
 */
export default function (array, predicate, fromIndex, fromRight) {
  const { length } = array; // 获得数组长度
  // 开始位置
  let index = fromIndex + (fromRight ? 1 : -1);
  // 如果从右边开始查找，递减并且递减前大于0，从左边开始，递增并且递增后小于数组长度
  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
