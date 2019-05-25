import subs from './subs';

describe('subs', () => {
	it('should pass sample test', () => {
		const data = 'GATATATGCATATACTT\nATAT';

		expect(subs(data)).toEqual('2 4 10');
	});
});
