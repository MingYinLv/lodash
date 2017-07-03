/**
 * Created by MingYin Lv on 2017/7/3 下午3:03.
 */

import compact from '../src/compact';

test('compact test', () => {
  expect(compact([0, 1, '', 'a', true, false])).toEqual([1, 'a', true])
});
