/**
 * Created by MingYin Lv on 2017/6/30.
 */
import slice from '../src/slice';

test('slice array', () => {
  expect(slice([1, 2, 3], 0, 2)).toEqual(Array.prototype.slice.call([1, 2, 3], 0, 2));
  expect(slice([1, 2, 3], '1', '5')).toEqual([2, 3]);
});
