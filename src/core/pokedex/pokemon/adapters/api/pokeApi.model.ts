export type PokemonFromPokeApi = {
	pokedexId: number;
	generation: number;
	category: string;
	name: {
		fr: string;
		en: string;
		jp: string;
	};
	sprites: {
		regular: string;
		shiny: string | null;
		gmax: {
			regular: string;
			shiny: string;
		} | null;
	};
	types:
		| {
				name: string;
				image: string;
		  }[]
		| null;
	talents:
		| {
				name: string;
				tc: boolean;
		  }[]
		| null;
	stats: {
		hp: number;
		atk: number;
		def: number;
		spe_atk: number;
		spe_def: number;
		vit: number;
	} | null;
	resistances:
		| {
				name: string;
				multiplier: number;
		  }[]
		| null;
	evolution: {
		pre:
			| {
					pokedexId: number;
					name: string;
			  }[]
			| null;
		next: {
			pokedexId: number;
			name: string;
			condition: string;
		}[];
		mega: null;
	} | null;
	height: string | null;
	weight: string | null;
	egg_groups: string[] | null;
	sexe: { male: number; female: number } | null;
	catch_rate: number | null;
	level_100: number | null;
	forme: null;
};

export type PokemonListFromPokeApi = PokemonFromPokeApi[];
