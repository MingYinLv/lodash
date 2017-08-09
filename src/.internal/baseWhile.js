/**
 * Created by MingYin Lv on 2017/8/9 下午3:55.
 */

import slice from '../slice';

/**
 *
 * @param array 操作的数组
 * @param predicate 条件方法
 * @param isDrop  是否移除
 * @param fromRight 是否从右边开始
 */
export default function baseWhile(array, predicate, isDrop, fromRight) {
  const { length } = array;
  let index = fromRight ? length : -1;
  while ((fromRight ? index-- : ++index < length) &&
  predicate(array[index], index, array)) {
  }

  return isDrop
    ? slice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
    : slice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index))

}
