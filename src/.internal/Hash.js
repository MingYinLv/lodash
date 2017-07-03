/**
 * Created by MingYin Lv on 2017/7/3.
 */

const HASH_UNDEFINED = '__lodash_hash_undefined__'

class Hash {
    /**
     * 创建hash对象
     *
     * @private
     * @constructor
     * @param {Array} entries 要缓存的键值对
     */
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
        this.__data__ = Object.create(null);
        this.size = 0;
    }

    delete(key){
        // 对于所有情况都是true，除非属性是一个自己的不可配置属性，在这种情况下，非严格模式返回 false。
        // 在严格模式下，如果是对象自身的不可配置属性，会抛出Global_objects/SyntaxError。
        const result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
    }

    get(key) {
        const data = this.__data__;
        const result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }

    has(key) {
        const data = this.__data__;
        return data[key] !== undefined;
    }

    /**
     * 设置hash key的值为value
     * @param key
     * @param val
     */
    set(key, val) {
        const data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = val === undefined ? HASH_UNDEFINED : val;
        return this;
    }
}

export default Hash;
