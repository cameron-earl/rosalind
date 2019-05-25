import { motifLocations } from '../helpers';

export default (data: string): string => {
	const [na, motif]: string[] = data.split(/\s/g);

	return motifLocations(na, motif).join(' ');
};
