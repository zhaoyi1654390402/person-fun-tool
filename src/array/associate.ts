import { notHas } from '../utils';

if (notHas(Array.prototype, 'associate')) {
    Object.defineProperty(Array.prototype, 'associate', {
        value: function (cb: (item: any) => [string, any]) {
            return this.reduce((previousValue: { [k: string]: any }, currentValue: any) => {
                let [key, value] = cb(currentValue);
                previousValue[key] = value;
                return previousValue;
            }, {});
        },
        enumerable: false,
    });
}
