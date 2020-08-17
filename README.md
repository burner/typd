# typyts

typyts is a library to safely access nested object.

```typescript
t({foo: { bar: 10 } }, "foo.bar").isNumber // true
```

## Usage

```typescript
const v = t(null, "foo");
expect(v.safeObject).to.eql({});

const msg = { a: 2 };
const v = t({"foo": msg}, "foo");
expect(v.safeObject).to.eql(msg);

const msg = "Hello World";
const v = t({a: { b: msg }}, "a.b");
expect(v.safeString).to.equal(msg);

const msg = "Hello World";
const v = t({a: { b: msg }}, "a.c");
expect(v.safeString).to.equal("");

const msg = 1337;
const v = t({"foo": msg}, "foo");
expect(v.safeNumber).to.equal(msg);

const msg = 1337;
const v = t({a: { b: msg }}, "a.b");
expect(v.safeNumber).to.equal(msg);

const msg = [1, 2];
const v = t({a: { b: msg }}, "a.b");
expect(v.safeArray).to.eql(msg);
```

## Interface

```typescript
export declare class Typd {
    input: any;
    path: string[];
    data: any;
    constructor(input: any, path: string[]);
    getValue<T>(nullValue: T): T;
    get safeString(): string;
    get safeNumber(): number;
    get safeBoolean(): boolean;
    get safeArray(): any[];
    get safeObject(): {};
    safeGenericObject<T = any>(): T;
    get isString(): boolean;
    get isNumber(): boolean;
    get isBoolean(): boolean;
    get isArray(): boolean;
    get isObject(): boolean;
    get isNull(): boolean;
    get isUndefined(): boolean;
}

export declare function t(input: any, path: string | string[]): Typd;
```

## Misc

Inspired by [typy](https://www.npmjs.com/package/typy).
