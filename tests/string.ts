import { expect } from 'chai';
import 'mocha';

import { t } from "../src/typd";

describe('String tests', () => {
    it('Null', () => {
		const v = t(null, "foo");
		expect(v.safeString).to.equal("");
  	});

    it('One', () => {
		const msg = "Hello World";
		const v = t({"foo": msg}, "foo");
		expect(v.safeString).to.equal(msg);
  	});

    it('Not an string', () => {
		const v = t({"foo": 1}, "foo");
		expect(v.safeString).to.equal("");
  	});

    it('Not an object', () => {
		const v = t(1337, "foo");
		expect(v.safeString).to.equal("");
  	});

    it('Nested string', () => {
		const msg = "Hello World";
		const v = t({a: { b: msg }}, "a.b");
		expect(v.safeString).to.equal(msg);
  	});

    it('Nested string fail', () => {
		const msg = "Hello World";
		const v = t({a: { b: msg }}, "a.c");
		expect(v.safeString).to.equal("");
  	});

    it('Undefined', () => {
		const v = t(undefined, "a.b");
		expect(v.safeString).to.equal("");
  	});
});
