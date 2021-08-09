import { notHas } from '../utils';

if (notHas(Array.prototype, 'filterType')) {
    Object.defineProperty(Array.prototype, 'filterType', {
        value: function (cb: (item: any) => boolean) {
            return (<any[]>this).filter(item => cb(item));
        },
        enumerable: false,
    });
}
