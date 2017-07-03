/**
 * Created by MingYin Lv on 2017/7/3 下午2:43.
 */

/**
 *
 * @param array 数组
 * @param func 用来测试数组的每个元素的函数。调用时使用参数 (element, index, array)。
 * 返回true表示保留该元素（通过测试），false则不保留。
 * @returns {Array} 新的结果数组
 */
export default function (array = [], func) {
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
