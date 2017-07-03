/**
 * Created by MingYin Lv on 2017/7/3.
 */
import dropRight from '../src/dropRight';

test('dropRight test', () => {
    expect(dropRight([1, 2, 3])).toEqual([1, 2]);
    expect(dropRight([1, 2, 3], 2)).toEqual([1]);
    expect(dropRight([1, 2, 3], 5)).toEqual([]);
});
