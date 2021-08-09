import { notHas } from '../utils';

if (notHas(Array.prototype, 'last')) {
    Object.defineProperty(Array.prototype, 'last', {
        value: function () {
            return (this && this.length) ? this[this.length - 1] : undefined;
        },
        enumerable: false,
    });
}
