import { notHas } from '../utils';

if (notHas(Array.prototype, 'filterNonNullable')) {
    Object.defineProperty(Array.prototype, 'filterNonNullable', {
        value: function () {
            return (this as any[]).filter(item => item !== null && item !== undefined);
        },
        enumerable: false,
    });
}