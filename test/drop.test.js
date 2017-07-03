/**
 * Created by MingYin Lv on 2017/7/3.
 */
import drop from '../src/drop';

test('drop test', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
    expect(drop([1, 2, 3], 2)).toEqual([3]);
    expect(drop([1, 2, 3], 5)).toEqual([]);
});
