/**
 * Created by MingYin Lv on 2017/7/2.
 */

import chunk from '../src/chunk';

test('chunk test', () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8], 'a')).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]])
});
