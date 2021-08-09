import { notHas } from '../utils';
import _mapValues from 'lodash/mapValues';

if (notHas(Object.prototype, 'mapValues')) {
    Object.defineProperty(Object.prototype, 'mapValues', {
        value: function (fn: Function) {
            return _mapValues(this, fn);
        },
        enumerable: false,
    });
}
