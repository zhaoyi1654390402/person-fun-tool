import { notHas } from '../utils';

if (notHas(Array.prototype, 'proall')) {
    Object.defineProperty(Array.prototype, 'proall', {
        value: function () {
            return Promise.all(this);
        },
        enumerable: false,
    });
}
