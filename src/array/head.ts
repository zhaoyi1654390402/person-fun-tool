import { notHas } from '../utils';

if (notHas(Array.prototype, 'head')) {
    Object.defineProperty(Array.prototype, 'head', {
        value: function head() {
            return (this && this.length) ? this[0] : undefined;
        },
        enumerable: false,
    });
}
