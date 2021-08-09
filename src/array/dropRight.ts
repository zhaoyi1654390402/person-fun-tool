import _dropRight from 'lodash/dropRight';
import { notHas } from '../utils';

if (notHas(Array.prototype, 'dropRight')) {
    Object.defineProperty(Array.prototype, 'dropRight', {
        value: function (n?: number) {
            return _dropRight(this, n);
        },
        enumerable: false,
    });
}
