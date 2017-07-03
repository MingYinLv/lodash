/**
 * Created by MingYin Lv on 2017/7/3 下午3:03.
 */

import filter from '../src/filter';

test('filter test', () => {
  expect(filter([1, 2, 3, 4, 5, 6], n => n % 2 === 0)).toEqual([1, 2, 3, 4, 5, 6].filter(n => n % 2 === 0))
});

