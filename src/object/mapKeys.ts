import { notHas } from '../utils';
import _mapKeys from 'lodash/mapKeys';

if (notHas(Object.prototype, 'mapKeys')) {
    Object.defineProperty(Object.prototype, 'mapKeys', {
        value: function (fn: Function) {
            return _mapKeys(this, fn);
        },
        enumerable: false,
    });
}
