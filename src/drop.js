/**
 * Created by MingYin Lv on 2017/7/3.
 */
import slice from './slice';

/**
 * 将 array 中的前 n 个元素去掉，然后返回剩余的部分。
 * @param array 被操作的数组。
 * @param n 去掉的元素个数。
 * @returns Array 返回 array 的剩余部分。
 * _.drop([1, 2, 3]);
 * // => [2, 3] 默认是1开始的
 * _.drop([1, 2, 3], 2);
 * // => [3]
 * _.drop([1, 2, 3], 5);
 * // => []
 * _.drop([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
export default function drop(array = [], n = 1) {
    const length = array === null ? 0 : array.length;
    return length ? slice(array, n < 0 ? 0 : n, length) : [];
}
