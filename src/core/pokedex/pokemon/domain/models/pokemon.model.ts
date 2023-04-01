import type { AsyncThunkStatus } from '../../../../shared/asyncThunkStatus.model';
import type { Evolution } from './evolution.model';

export type PokemonDetailsState = {
	data: Pokemon | undefined;
	status: AsyncThunkStatus;
};

type Resistance = {
	name: string;
	multiplier: number;
};

type Sprites = {
	regular: string;
	shiny: string | null;
	gmax?: Omit<Sprites, 'gmax'> | null;
};

type Types = {
	name: string;
	image: string;
};

export type Pokemon = {
	pokedexId: number;
	generation: number;
	name: { fr: string; en: string };
	sprites: Sprites;
	types: Types[] | null;
	resistances: Resistance[] | null;
	evolution: Evolution | null;
};
