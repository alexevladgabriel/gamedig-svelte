import type { PageServerLoad } from './$types';
import Gamedig from 'gamedig';

export const load = (async () => {
	const game = new Gamedig();
	const response = await game.query({ host: 'romania.laleagane.ro', port: 27015, type: 'csgo' });
	return {
		name: response.name,
		players: response.players.length,
		max_players: response.maxplayers,
		map: response.map
	};
}) satisfies PageServerLoad;
