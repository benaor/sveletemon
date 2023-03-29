export type PokemonDetailsState = {
	data: PokemonDetails | undefined;
	status: AsyncThunkStatus;
};

export type AsyncThunkStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export type Resistance = {
	name: string;
	multiplier: number;
};

export type Sprites = {
	regular: string;
	shiny: string;
	gmax: string | null;
};

export type Types = {
	name: string;
	image: string;
};

export type PokemonDetails = {
	pokedexId: number;
	generation: number;
	name: { fr: string; en: string };
	sprites: Sprites;
	types: Types[];
	resistances: Resistance[];
	evolution: {
		pre: { pokedexId: number; name: string }[] | null;
		next: { pokedexId: number; name: string; condition: string }[] | null;
	};
};
