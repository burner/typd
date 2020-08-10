import { expect } from 'chai';
import 'mocha';

import { t } from "../src/typyts";

describe('Number tests', () => {
    it('Null', () => {
		const v = t(null, "foo");
		expect(v.safeNumber).to.be.NaN;
  	});

    it('One', () => {
		const msg = 1337;
		const v = t({"foo": msg}, "foo");
		expect(v.safeNumber).to.equal(msg);
  	});

    it('Not an number', () => {
		const v = t({"foo": "Hello"}, "foo");
		expect(v.safeNumber).to.be.NaN;
  	});

    it('Not an object', () => {
		const v = t(1337, "foo");
		expect(v.safeNumber).to.be.NaN;
  	});

    it('Nested number', () => {
		const msg = 1337;
		const v = t({a: { b: msg }}, "a.b");
		expect(v.safeNumber).to.equal(msg);
  	});

    it('Nested number fail', () => {
		const msg = 1337;
		const v = t({a: { b: msg }}, "a.c");
		expect(v.safeNumber).to.be.NaN;
  	});

    it('Undefined', () => {
		const v = t(undefined, "a.b");
		expect(v.safeNumber).to.be.NaN;
  	});
});
