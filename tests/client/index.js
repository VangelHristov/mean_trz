(function clientTestModule() {
	'use strict';

	const {test, suite, beforeEach, afterEach} = window;
	const {assert} = window.chai;

	suite('Check if karma is setup correctly');

	let count = 0;

	test('1 should be equal to 1', () => {
		assert.strictEqual(count, 1);
	});

	beforeEach(() => {
		count = 1;
	});

	afterEach(() => {
		count = 0;
	});
}());