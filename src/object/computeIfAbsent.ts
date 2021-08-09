import { notHas } from '../utils';

if (notHas(Object.prototype, 'computeIfAbsent')) {
    Object.defineProperty(Object.prototype, 'computeIfAbsent', {
        value: function (key: string, cb: (k: string) => any) {
            if (!this.hasOwnProperty(key)) {
                this[key] = cb(key);
            }
            return this[key];
        },
        enumerable: false,
    });
}

