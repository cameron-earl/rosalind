import fib from './fib';

describe('fib', () => {
	it('should return "19" when given "5 3"', () => {
		expect(fib('5 3')).toEqual('19');
	});
});
