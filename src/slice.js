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
    if (!length) return [];
    start = start == null ? 0 : start;
    end = end === undefined ? length : end;
    if (start < 0) {
        start = -start > length ? 0 : (length + start)
    }
    end = end > length ? length : end;
    if (end < 0) {
        end += length;
    }

    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;
    let index = -1;
    const result = new Array(length);
    while (++index < length) {
        result[index] = array[index + start];
    }
    return result;
};
