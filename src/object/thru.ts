import { notHas } from '../utils';

if (notHas(Object.prototype, 'thru')) {
    Object.defineProperty(Object.prototype, 'thru', {
        value: function thru(fn: Function) {
            return fn(this);
        },
        enumerable: false,
    });
}
