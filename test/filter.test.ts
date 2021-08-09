import '../src';

test('filter', () => {
    const arr: Array<number | null | undefined> = [1, 2, null, undefined, 3];
    // const arr1 = arr.filterNotNull();
    // const arr2 = arr.filterNotNullOrUndefined();
    const arr3 = arr.filterType<number>(item => typeof item === 'number');
    const arr4 = arr.filterNonNullable();
    // expect(arr1).toStrictEqual([1, 2, undefined, 3]);
    // expect(arr2).toStrictEqual([1, 2, 3]);
    expect(arr3).toStrictEqual([1, 2, 3]);
    expect(arr4).toStrictEqual([1, 2, 3]);

    const ids: Array<{ id: null | undefined | string }> = [
        {id: null},
        {id: '1'},
        {id: undefined},
    ];
    const res = ids.mapNonNullable<{ id: string }>(_ => {
        if (_.id !== null && _.id !== undefined) {
            return {
                id: _.id,
            };
        }
    });

    // function test(x: Array<{ id: string }>) {
    //
    // }
    //
    // test(res);
});
