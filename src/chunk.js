/**
 * Created by MingYin Lv on 2017/7/2.
 */
import slice from './slice';

// 将 array 拆分成多个 size 长度的块，把这些块组成一个新数组。 如果 array 无法被分割成全部等长的块，那么最后剩余的元素将组成一个块。
//
// 参数
// array (Array): 需要被处理的数组。
// [size=1] (number): 每个块的长度。
// 返回值
// (Array): 返回一个包含拆分块数组的新数组（相当于一个二维数组）。
//
// chunk(['a', 'b', 'c', 'd'], 2)
// => [['a', 'b'], ['c', 'd']]
//
// (['a', 'b', 'c', 'd'], 3)
// => [['a', 'b', 'c'], ['d']]

export default function (array = [], size) {
  // 如果size为负数，size设为0
  size = Math.max(size, 0);
  // 是否传入了数组，如果没有传入，array长度为0
  let length = array === null ? 0 : array.length;
  if (!length || size < 1) {
    // 如果length为0或者size<1，返回空的数组
    return [];
  }
  let index = 0;
  let resIndex = 0;
  // 分割后的数组长度，如果有小数往上取整
  const result = new Array(Math.ceil(length / size));
  while (index < length) {
    // 循环设置新的数组，slice如果end超出array长度，会默认设置为array的length
    result[resIndex++] = slice(array, index, (index += size));
  }
  return result;
}
