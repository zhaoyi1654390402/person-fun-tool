import '../src';
import * as _ from 'lodash';

test('fruits change', () => {
    const fruits = [
        {name: 'banana', amount: 2},
        {name: 'apple', amount: 4},
        {name: 'pineapple', amount: 2},
        {name: 'mango', amount: 1}
    ];
    expect(
        fruits
            .concat([{name: 'apple', amount: 100}])
            .sortedBy('name', 'amount')
            .reverse()
            .tap(arr => arr.unshift({name: 'pineapple', amount: 100}))
            .thru(arr => arr[0])
    ).toStrictEqual({name: 'pineapple', amount: 100});
});
