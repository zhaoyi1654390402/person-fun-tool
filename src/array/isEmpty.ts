import { notHas } from '../utils';

if (notHas(Array.prototype, 'isEmpty')) {
    Object.defineProperty(Array.prototype, 'isEmpty', {
        value: function () {
            return this.length === 0;
        },
        enumerable: false,
    });
}
