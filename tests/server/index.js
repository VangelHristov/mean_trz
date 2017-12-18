'use strict';

const {assert} = require('chai');

suite('Check if mocha is configured properly');

let count = 0;

test('1 === 1', function test() {
	assert.equal(1, count);
});

beforeEach(function setup() {
	count += 1;
});

afterEach(function teardown() {
	count = 0;
});