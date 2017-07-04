/**
 * Created by MingYin Lv on 2017/7/4.
 */

import eq from '../eq';

/**
 * 获得key在数组中的键值对索引
 * @private
 * @param {Array} array
 * @param {*} key 要查询的key
 * @returns {number} 返回key在数组中的索引，没找到返回-1
 */
export default function assocIndexOf(array, key) {
  let { length } = array;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
