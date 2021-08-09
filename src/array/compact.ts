import { notHas } from '../utils';

if (notHas(Array.prototype, 'compact')) {
    Object.defineProperty(Array.prototype, 'compact', {
        value: function () {
            return this.filter((item: any) => !!item);
        },
        enumerable: false,
    });
}
