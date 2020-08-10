import { expect } from 'chai';
import 'mocha';

import { t } from "../src/typd";

describe('Object tests', () => {
    it('Null', () => {
		const v = t(null, "foo");
		expect(v.safeObject).to.eql({});
  	});

    it('One', () => {
		const msg = { a: 2 };
		const v = t({"foo": msg}, "foo");
		expect(v.safeObject).to.eql(msg);
  	});

    it('Not an object', () => {
		const v = t({"foo": 1}, "foo");
		expect(v.safeObject).to.eql({});
  	});

    it('Not an object', () => {
		const v = t(1337, "foo");
		expect(v.safeObject).to.eql({});
  	});

    it('Nested object', () => {
		const msg = { a: 2 };
		const v = t({a: { b: msg }}, "a.b");
		expect(v.safeObject).to.eql(msg);
  	});

    it('Nested object fail', () => {
		const msg = "Hello World";
		const v = t({a: { b: msg }}, "a.c");
		expect(v.safeObject).to.eql({});
  	});

    it('Undefined', () => {
		const v = t(undefined, "a.b");
		expect(v.safeObject).to.eql({});
  	});
});
