import type { Pokemon } from '../../domain/models/pokemon.model';

export const bulbizarre: Pokemon = {
	pokedexId: 1,
	generation: 1,
	name: { fr: 'Bulbizarre', en: 'Bulbasaur' },
	sprites: {
		regular: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/1/regular.png',
		shiny: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/1/shiny.png',
		gmax: null
	},
	types: [
		{
			name: 'Plante',
			image: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/plante.png'
		},
		{
			name: 'Poison',
			image: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/poison.png'
		}
	],
	resistances: [
		{ name: 'Normal', multiplier: 1 },
		{ name: 'Plante', multiplier: 0.25 },
		{ name: 'Feu', multiplier: 2 },
		{ name: 'Eau', multiplier: 0.5 },
		{ name: 'electrik', multiplier: 0.5 },
		{ name: 'Glace', multiplier: 2 },
		{ name: 'Combat', multiplier: 0.5 },
		{ name: 'Poison', multiplier: 1 },
		{ name: 'Sol', multiplier: 1 },
		{ name: 'Vol', multiplier: 2 },
		{ name: 'Psy', multiplier: 2 },
		{ name: 'Insecte', multiplier: 1 },
		{ name: 'Roche', multiplier: 1 },
		{ name: 'Spectre', multiplier: 1 },
		{ name: 'Dragon', multiplier: 1 },
		{ name: 'T\u00e9n\u00e8bres', multiplier: 1 },
		{ name: 'Acier', multiplier: 1 },
		{ name: 'F\u00e9e', multiplier: 0.5 }
	],
	evolution: {
		pre: null,
		next: [
			{ pokedexId: 2, name: 'Herbizarre', condition: 'Niveau 16' },
			{ pokedexId: 3, name: 'Florizarre', condition: 'Niveau 32' }
		]
	}
};

export const pikachu: Pokemon = {
	pokedexId: 25,
	generation: 1,
	name: { fr: 'Pikachu', en: 'Pikachu' },
	sprites: {
		regular: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/25/regular.png',
		shiny: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/25/shiny.png',
		gmax: null
	},
	types: [
		{
			name: '\u00c9lectrik',
			image: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/electrik.png'
		}
	],
	resistances: [
		{ name: 'Normal', multiplier: 1 },
		{ name: 'Plante', multiplier: 1 },
		{ name: 'Feu', multiplier: 1 },
		{ name: 'Eau', multiplier: 1 },
		{ name: '\u00c9lectrik', multiplier: 0.5 },
		{ name: 'Glace', multiplier: 1 },
		{ name: 'Combat', multiplier: 1 },
		{ name: 'Poison', multiplier: 1 },
		{ name: 'Sol', multiplier: 2 },
		{ name: 'Vol', multiplier: 0.5 },
		{ name: 'Psy', multiplier: 1 },
		{ name: 'Insecte', multiplier: 1 },
		{ name: 'Roche', multiplier: 1 },
		{ name: 'Spectre', multiplier: 1 },
		{ name: 'Dragon', multiplier: 1 },
		{ name: 'T\u00e9n\u00e8bres', multiplier: 1 },
		{ name: 'Acier', multiplier: 0.5 },
		{ name: 'F\u00e9e', multiplier: 1 }
	],
	evolution: {
		pre: [{ pokedexId: 172, name: 'Pichu' }],
		next: [{ pokedexId: 26, name: 'Raichu', condition: 'Pierre Foudre' }]
	}
};

export const sulfura: Pokemon = {
	pokedexId: 146,
	generation: 1,
	name: { fr: 'Sulfura', en: 'Moltres' },
	sprites: {
		regular: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/146/regular.png',
		shiny: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/146/shiny.png',
		gmax: null
	},
	types: [
		{
			name: 'Feu',
			image: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/feu.png'
		},
		{
			name: 'Vol',
			image: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/vol.png'
		}
	],
	resistances: [
		{ name: 'Normal', multiplier: 1 },
		{ name: 'Plante', multiplier: 0.25 },
		{ name: 'Feu', multiplier: 0.5 },
		{ name: 'Eau', multiplier: 2 },
		{ name: '\u00c9lectrik', multiplier: 2 },
		{ name: 'Glace', multiplier: 1 },
		{ name: 'Combat', multiplier: 0.5 },
		{ name: 'Poison', multiplier: 1 },
		{ name: 'Sol', multiplier: 0 },
		{ name: 'Vol', multiplier: 1 },
		{ name: 'Psy', multiplier: 1 },
		{ name: 'Insecte', multiplier: 0.25 },
		{ name: 'Roche', multiplier: 4 },
		{ name: 'Spectre', multiplier: 1 },
		{ name: 'Dragon', multiplier: 1 },
		{ name: 'T\u00e9n\u00e8bres', multiplier: 1 },
		{ name: 'Acier', multiplier: 0.5 },
		{ name: 'F\u00e9e', multiplier: 0.5 }
	],
	evolution: null
};
