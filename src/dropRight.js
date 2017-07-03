/**
 * Created by MingYin Lv on 2017/7/3.
 */

import slice from './slice';

export default function dropRight(array, n = 1) {
    const length = array === null ? 0 : array.length;
    return length ? slice(array, 0, n < 0 ? 0 : -n) : [];
}

