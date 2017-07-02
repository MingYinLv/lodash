/**
 * Created by MingYin Lv on 2017/6/30.
 */

/**
 * 分割数组
 * @param array 要分割的数组
 * @param start 开始位置
 * @param end   结束位置
 * @returns [] 新的数组
 */
export default function (array, start, end) {
    // 是否传入了数组，如果没有传入，array长度为0
    let length = array == null ? 0 : array.length;
    // 如果长度为0，返回一个空的数组
    if (!length) return [];
    // 如果没有传入start，默认为0
    start = start == null ? 0 : start;
    // 如果没有传入end，默认为array长度
    end = end === undefined ? length : end;
    if (start < 0) {
        // 如果start是负数，从结尾往前数
        start = -start > length ? 0 : (length + start)
    }
    // 如果end大于length，设置为length
    end = end > length ? length : end;
    if (end < 0) {
        // 如果end是负数，从结尾往前数
        end += length;
    }

    // 如果start大于end，新数组的length为0，否则为end-start， >>> 0 将错误的非数字值转化为0
    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;
    let index = -1;
    // 创建新的数组
    const result = new Array(length);
    while (++index < length) {
        // 循环重新设置新的数组
        result[index] = array[index + start];
    }
    return result;
};
