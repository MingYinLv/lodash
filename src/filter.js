/**
 * Created by MingYin Lv on 2017/7/3 下午2:43.
 */

// alias Array.filter

export default function(array = [], func) {
  const length = array === null ? 0 : array.length;
  const result = [];
  let index = -1;
  let resIndex = 0;
  while (++index < length) {
    const value = array[index];
    if (func(value, index, array)) {
      result [resIndex++] = value;
    }
  }
  return result;
}
