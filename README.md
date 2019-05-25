## Solutions for the problems found at [http://rosalind.info](http://rosalind.info)

Rosalind.info has a repository of bioinformatics problems arranged in increasing complexity. If you don't want it spoiled for you, avoid looking at the

## How to Run:

1. Install node and typescript globally.
1. Find a problem on rosalind, and notice the 2-4 character problem name in the url. For example, in [http://rosalind.info/problems/fib/](http://rosalind.info/problems/fib/) it would be **fib**.
1. Create a new file by that name in the ts/solutions directory.

   ```ts
   // fib.ts:
   export default (data: string): string => {
   	return '';
   };
   ```

1. In the same directory, create the test file.

   ```ts
   // fib.test.ts
   import fib from './fib';

   describe('fib', () => {
   	it('should pass sample test', () => {
   		const sampleInput = '5 3';
   		const expected = '19';
   		expect(fib(sampleInput)).toEqual(expected);
   	});
   });
   ```

1. In the solutions object in the ts/solutions/index.ts file, add the name to the list and import it.
1. Code the solution.
1. When ready to try against real data, download dataset and save inside `/datasets`.
1. In the cli, execute `npm start`. To run any solution other than the last in the object, you can enter it in the cli. Example: `npm start fib`.
