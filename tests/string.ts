import { expect } from 'chai';
import 'mocha';

import { t } from "../src/typd";

describe('String tests', () => {
    it('Null', () => {
		const v = t(null, "foo");
		const s = v.safeString;
		expect(v.safeString).to.equal("");
  	});

    it('One', () => {
		const msg = "Hello World";
		const v = t({"foo": msg}, "foo");
		const s = v.safeString;
		expect(v.safeString).to.equal(msg);
  	});

    it('Not an string', () => {
		const v = t({"foo": 1}, "foo");
		const s = v.safeString;
		expect(v.safeString).to.equal("");
  	});

    it('Not an object', () => {
		const v = t(1337, "foo");
		const s = v.safeString;
		expect(v.safeString).to.equal("");
  	});

    it('Nested string', () => {
		const msg = "Hello World";
		const v = t({a: { b: msg }}, "a.b");
		const s = v.safeString;
		expect(v.safeString).to.equal(msg);
  	});
});
