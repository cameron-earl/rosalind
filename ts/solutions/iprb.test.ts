import iprb from './iprb';

describe('iprb', () => {
	it('should return 0.78333 given 2 2 2', () => {
		expect(iprb('2 2 2')).toEqual('0.78333');
	});
});
