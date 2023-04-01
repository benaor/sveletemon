export type Evolution = {
	pre: PreEvolution[] | null;
	next: NextEvolution[] | null;
};

export type PreEvolution = {
	pokedexId: string | number;
	name: string;
};

export type NextEvolution = {
	pokedexId: string | number;
	name: string;
	condition: string;
};