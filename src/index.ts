import * as _ from 'lodash';
import * as R from 'ramda';

import './array';
import './object';

export type AnyObject = {
	[k: string]: any;
};
export type AnyArray = any[];
export type NormalType = string | number | null | boolean | undefined;
export type EmptyType = null | undefined | false | '';
export type ValuedType = string | object | number | boolean | AnyObject;
export type Ord = number | string | boolean | Date;
declare global {
	interface PromiseConstructor {
		/**
		 * @description 并不是判断真正的判断是不是new Promise,而是判断PromiseLike,
		 *              即判断是否有.then
		 * @param obj any
		 */
		isPromise<T, S>(obj: PromiseLike<T> | S): obj is PromiseLike<T>;
	}
	interface Array<T> {
		/**
		 * @description 当前数组中的每一项转从Promise,等待所有Promise成功则成功,表现与Promise.all一致
		 */
		proall<TResult>(): Promise<Array<TResult>>;
		/**
		 * @description 数组中每一项是否都满足传入的函数条件
		 */
		all<T>(fn: (a: T) => boolean, list: readonly T[]): boolean;
		all<T>(fn: (a: T) => boolean): (list: readonly T[]) => boolean;
		/**
		 * @description 数组中任意一项满足传入的函数条件
		 */
		any<T>(fn: (a: T) => boolean, list: readonly T[]): boolean;
		any<T>(fn: (a: T) => boolean): (list: readonly T[]) => boolean;
		/**
		 * @description 类似map,会返回新对象.
		 *              回调函数cb返回一个长度为2的数组
		 *              数组的第一项为新对象的key
		 *              数组的第二项为新对象的value
		 * @param cb
		 */
		associate<U>(cb: (item: T) => [string, U]): { [k: string]: U };
		associate<U>(
			cb: (item: T) => [string, U]
		): (list: readonly T[]) => boolean;
		/**
		 * @description 过滤数组中所有未假的值,包括''|0|false|null|undefined
		 */
		compact<U = T>(): Array<U>;
		/**
		 * @description 根据函数返回值或属性计数,返回结果对象.
		 * @param iteratee
		 */
		countBy<T>(
			fn: (a: T) => string | number,
			list: readonly T[]
		): { [index: string]: number };
		countBy<T>(
			fn: (a: T) => string | number
		): (list: readonly T[]) => { [index: string]: number };
		/**
		 * @description 返回去除array前面的n个元素后的数组,不会修改原始数组
		 * @param n number
		 */
		drop(n?: number): T[];
		/**
		 * @description 返回去除array尾部的n个元素后的数组,不会修改原始数组
		 * @param n
		 */
		dropRight(n?: number): T[];
		/**
		 * @description 过滤数组中的null和undefined
		 */
		filterNonNullable(): NonNullable<T>[];
		/**
		 * @description 按回调函数过滤数组,与原生filter类似,但是可以方便的指定泛型
		 * @param predicate
		 */
		filterType<U>(predicate: (item: T) => boolean): U[];
		/**
		 * @description 寻找符合要求的最后一个项的值
		 */
		findLastBy<T>(fn: (a: T) => boolean, list: readonly T[]): T | undefined;
		findLastBy<T>(
			fn: (a: T) => boolean
		): (list: readonly T[]) => T | undefined;
		/**
		 * @description 寻找符合要求的最后一个项的index
		 */
		findLastIndexBy<T>(fn: (a: T) => boolean, list: readonly T[]): number;
		findLastIndexBy<T>(
			fn: (a: T) => boolean
		): (list: readonly T[]) => number;
		/**
		 * @description 效果和find等同,但是firstBy如果找不到会抛出异常
		 * @param predicate
		 * @param thisArg
		 */
		firstBy<T>(fn: (a: T) => boolean, list: readonly T[]): T | undefined;
		firstBy<T>(
			fn: (a: T) => boolean
		): (list: readonly T[]) => T | undefined;
		/**
		 * @description 按回调函数返回值分组的对象,key是分组依据,value是分组结果数组.
		 *              缺点是1和'1'会一组,同时会丢失分组依据的类型,Object.keys()返回的全是string类型
		 */
		groupBy<T, K extends string = string>(
			fn: (a: T) => K,
			list: readonly T[]
		): Record<K, T[]>;
		groupBy<T, K extends string = string>(
			fn: (a: T) => K
		): (list: readonly T[]) => Record<K, T[]>;
		/**
		 * @description 严格按照分组依据分类,返回二维数组,1和'1'不会合并
		 * @param iteratee
		 */
		strictGroupBy(
			fn: (a: T) => NormalType,
			list: readonly T[]
		): Array<[NormalType, T[]]>;
		strictGroupBy(
			fn: (a: T) => NormalType
		): (list: readonly T[]) => Array<[NormalType, T[]]>;
		/**
		 * @description 按回调函数返回值分组的数组,返回的是二维数组.
		 *              如果分组依据都是数字则会保留类型
		 * @param iteratee
		 */
		groupByAndToPairs(iteratee: (it: T) => number): Array<[number, T[]]>;
		/**
		 * @description 按回调函数返回值分组的数组,返回的是二维数组.
		 *              缺点是1和'1'会一组,分组依据会被转为string
		 * @param iteratee
		 */
		groupByAndToPairs(
			iteratee: (it: T) => NormalType
		): Array<[string, T[]]>;
		/**
		 * @description 获取数组的第一个值,数组长度为0时,返回undefined
		 */
		head(): T | undefined;
		/**
		 * @description 用于判断一个数组是否包含另外一个数组中的所以项
		 * @param arr
		 * @param cb
		 */
		includesAll<U>(arr: U[], cb?: (item: T, it: U) => boolean): boolean;
		/**
		 * @description 判断数组长度是否为0
		 */
		isEmpty(): boolean;
		/**
		 * @description 按函数返回值将数组转为对象
		 * @param iteratee
		 */
		keyBy(
			fn: _.ValueIterateeCustom<T, _.PropertyName>,
			list: readonly T[]
		): {
			[index: string]: T;
		};
		keyBy(fn: _.ValueIterateeCustom<T, _.PropertyName>): (
			list: readonly T[]
		) => {
			[index: string]: T;
		};
		/**
		 * @description 获取数组的最后一个值,数组长度为0时,返回undefined
		 */
		last(): T | undefined;

		/**
		 * @description 按照函数返回的值排序返回排序结果的第一项
		 * @param fn
		 */
		maxBy(fn: _.ValueIteratee<T>, list: readonly T[]): T;
		maxBy(fn: _.ValueIteratee<T>): (list: readonly T[]) => T;
		/**
		 * @description 按照函数返回的值排序返回排序结果的最后一项
		 * @param fn
		 */
		minBy(fn: _.ValueIteratee<T>, list: readonly T[]): T;
		minBy(fn: _.ValueIteratee<T>): (list: readonly T[]) => T;
		/**
		 * @description 与[].every()相反,回调函数返回值每一个都是false则返回true
		 * @param predicate
		 */
		none<T>(fn: (a: T) => boolean, list: readonly T[]): boolean;
		none<T>(fn: (a: T) => boolean): (list: readonly T[]) => boolean;
		/**
		 * @description 按照返回值将数组分为2组
		 * @param iteratee
		 */
		partition(
			fn: (a: string) => boolean,
			list: readonly string[]
		): [string[], string[]];
		partition<T>(fn: (a: T) => boolean, list: readonly T[]): [T[], T[]];
		partition<T>(fn: (a: T) => boolean): (list: readonly T[]) => [T[], T[]];
		partition(
			fn: (a: string) => boolean
		): (list: readonly string[]) => [string[], string[]];
		/**
		 * @description 创建一个元素数组。
		 *              以 iteratee 处理的结果升序排序。
		 *              这个方法执行稳定排序，也就是说相同元素会保持原始排序。
		 *              iteratees 调用1个参数： (value)。
		 * @param iteratees
		 */
		sortedBy(...iteratees: Array<_.Many<_.ListIteratee<T>>>): Array<T>;
		/**
		 * @description 把函数返回值求和
		 * @param fn
		 */
		sumBy(fn?: ((value: T) => number) | string): number;
		/**
		 * @description 从array数组的起始元素开始提取n个元素。不会修改原始数组
		 * @param n
		 */
		take<T>(n?: number): T[];
		/**
		 * @description 从array数组的最后一个元素开始提取n个元素。不会修改原始数组
		 * @param n
		 */
		takeRight<T>(n?: number): T[];


		thru<TResult>(fn: (value: this) => TResult): TResult;
		/**
		 * @description 按函数返回值作为已经去重
		 * @param fn
		 */
		uniqBy<T, U>(fn: (a: T) => U, list: readonly T[]): T[];
		uniqBy<T, U>(fn: (a: T) => U): (list: readonly T[]) => T[];

		mapNonNullable<U = ValuedType>(
			predicate: (item: T) => U | null | undefined
		): U[];
	}
	interface Object {
		/**
		 * @description 创建一个新的对象,key为原始对象的key,
		 *              iteratee为函数,新对象的value是回调回调函数返回的值,
		 *              iteratee为string,新对象的value是原始对象[iteratee]的值.
		 * @param fn string | Function
		 */
		mapValues<TResult, TObject extends object>(
			fn: (
				value: TObject[keyof TObject],
				key: keyof TObject,
				object: TObject
			) => TResult
		): { [key: string]: TResult };
		mapValues<TResult>(fn: string): { [k: string]: TResult };
		/**
		 * @description 创建一个对象,value是原始对象的value,
		 *              iteratee为函数,新对象的key是回调回调函数返回的值,
		 *              iteratee为string,新对象的key是原始对象[iteratee]的值.
		 * @param fn string | Function
		 */
		mapKeys<T extends object>(
			fn: (value: T[keyof T], key: keyof T, object: T) => NormalType
		): { [index: string]: T[keyof T] };

		mapKeys<T extends object>(fn: string): { [index: string]: T[keyof T] };
		/**
		 * @description 一般用于建立缓存对象.
		 *              可以从对象上取key的值,
		 *              如果key不存在,则运行回调函数cb,把cb的返回值复制给key,
		 *              然后再返回key的值.
		 * @param key string 所要取值的key
		 * @param cb Function 如果key不存在是的初始化函数,参数为key
		 */
		computeIfAbsent<T>(key: string, cb: (key: string) => T): T;
		tap(fn: (value: this) => void): this;

	}
	interface Function {
		/**
		 * @description 接受两个参数，第一个参数是函数，第二个参数是函数数组。
		 * 传入的值先使用第二个参数包含的函数分别处理以后，再用第一个参数处理前一步生成的结果。
		 */
		converge(
			after: (...a: readonly any[]) => any,
			fns: Array<(...a: readonly any[]) => any>
		): (...a: readonly any[]) => any;
	}
}
