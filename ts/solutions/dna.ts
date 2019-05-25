export default (data: string): string => {
	const counts: { [key: string]: number } = {
		A: 0,
		C: 0,
		G: 0,
		T: 0,
	};
	for (const c of data) {
		counts[c] += 1;
	}
	return `${counts.A} ${counts.C} ${counts.G} ${counts.T}`;
};
