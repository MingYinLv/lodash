/**
 * Created by MingYin Lv on 2017/7/3 下午2:32.
 */
import filter from './filter';

/**
 * 创建一个新数组并包含原数组中所有的非假值元素。例如 false、null、 0、""、undefined 和 NaN 都是“假值”。
 * @param array 数组参数.
 * @returns {Array} 返回过滤假值后的数组.
 * compact([0, 1, false, 2, '', 3]);
 * => [1, 2, 3]
 */
export default function compact(array = []) {
  if (array === null) return [];
  return filter(array, n => n);
}

