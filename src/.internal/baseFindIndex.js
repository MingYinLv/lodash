/**
 * Created by MingYin Lv on 2017/7/9.
 */

/**
 * findIndex和findLastIndex的基础方法
 * @param array 查找的数组
 * @param predicate 查找的方法
 * @param fromIndex 开始位置
 * @param fromRight 结束位置
 */
export default function(array, predicate, fromIndex, fromRight){
  const {length} = array;
  let index = fromIndex + (fromRight ? 1: -1);
  while((fromRight ? index -- : ++index < length)){
    if(predicate(array[index], index, array)){
      return index;
    }
  }
  return -1;
}
