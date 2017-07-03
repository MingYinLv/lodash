/**
 * Created by MingYin Lv on 2017/7/3.
 */

/**
 * 判断两个值是否相等
 * @param value
 * @param other
 * @returns {boolean}
 */
export default function eq(value, other) {
    return value === other || (value !== value && other !== other);
}
