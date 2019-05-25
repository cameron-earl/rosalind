import { motifLocations } from '../helpers';

export default (data: string): string => {
	const [na, motif] = data.split(/\s/g);

	return motifLocations(na, motif).join(' ');
};
