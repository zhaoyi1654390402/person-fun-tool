import _takeRight from 'lodash/takeRight';
import { notHas } from '../utils';

if (notHas(Array.prototype, 'takeRight')) {
    Object.defineProperty(Array.prototype, 'takeRight', {
        value: function (n?: number) {
            return _takeRight(this, n);
        },
        enumerable: false,
    });
}
