/**
 * Created by MingYin Lv on 2017/7/6 上午10:23.
 */

import Hash from './Hash';
import ListCache from './ListCache';

function getMapData({ __data__ }, key) {
  const data = __data__;
  return isKeyable(key)
    ? data[typeof key === 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * 判断value是否可以作为一个key
 * @param value
 * @returns {boolean}
 */
function isKeyable(value) {
  const type = typeof value;
  return (type === 'string' || type === 'number' || type === 'symbol' || type === 'boolean')
    ? (value !== '__proto__') : (value === null);
}

class MapCache {

  constructor(entries = []) {
    let index = -1;
    const length = entries === null ? 0 : entries.length;

    this.clear();

    while (++index < length) {
      const entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  clear() {
    this.size = 0;
    this.__data__ = {
      hash: new Hash,
      map: new (Map || ListCache),
      string: new Hash,
    }
  }

  delete(key) {
    const result = getMapData(this, key)['delete'][key];
    this.size -= result ? 1 : 0;
    return result;
  }

  get(key) {
    return getMapData(this, key).get(key);
  }

  has(key) {
    return getMapData(this, key).get(key);
  }

  set(key, value) {
    const data = getMapData(this, key);
    const size = data.size;
    data.set(key, value);
    this.size += data.size === size ? 0 : 1;
    return this;
  }
}

export default MapCache;

