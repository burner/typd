import { expect } from 'chai';
import 'mocha';

import { t } from "../src/typd";

describe('Array tests', () => {
    it('Null', () => {
		const v = t(null, "foo");
		expect(v.safeArray).to.eql([]);
  	});

    it('One', () => {
		const msg = [ 1, 2 ];
		const v = t({"foo": msg}, "foo");
		expect(v.safeArray).to.eql(msg);
  	});

    it('Not an string', () => {
		const v = t({"foo": 1}, "foo");
		expect(v.safeArray).to.eql([]);
  	});

    it('Not an object', () => {
		const v = t(1337, "foo");
		expect(v.safeArray).to.eql([]);
  	});

    it('Nested string', () => {
		const msg = [1, 2];
		const v = t({a: { b: msg }}, "a.b");
		expect(v.safeArray).to.eql(msg);
  	});

    it('Undefined', () => {
		const v = t(undefined, "a.b");
		expect(v.safeArray).to.eql([]);
  	});
});
