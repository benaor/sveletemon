import type { PokemonList } from '../../domain/models/pokemonList.model';

export const listOfPokemon: PokemonList = [
	{
		pokedexId: 0,
		generation: 1,
		name: {
			fr: 'MissingNo.',
			en: 'MissingNo.'
		},
		sprites: {
			regular: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/0/regular.png',
			shiny: null,
			gmax: null
		},
		types: null,
		resistances: null,
		evolution: null
	},
	{
		pokedexId: 1,
		generation: 1,
		name: {
			fr: 'Bulbizarre',
			en: 'Bulbasaur'
		},
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
			{
				name: 'Normal',
				multiplier: 1
			},
			{
				name: 'Plante',
				multiplier: 0.25
			},
			{
				name: 'Feu',
				multiplier: 2
			},
			{
				name: 'Eau',
				multiplier: 0.5
			},
			{
				name: 'Électrik',
				multiplier: 0.5
			},
			{
				name: 'Glace',
				multiplier: 2
			},
			{
				name: 'Combat',
				multiplier: 0.5
			},
			{
				name: 'Poison',
				multiplier: 1
			},
			{
				name: 'Sol',
				multiplier: 1
			},
			{
				name: 'Vol',
				multiplier: 2
			},
			{
				name: 'Psy',
				multiplier: 2
			},
			{
				name: 'Insecte',
				multiplier: 1
			},
			{
				name: 'Roche',
				multiplier: 1
			},
			{
				name: 'Spectre',
				multiplier: 1
			},
			{
				name: 'Dragon',
				multiplier: 1
			},
			{
				name: 'Ténèbres',
				multiplier: 1
			},
			{
				name: 'Acier',
				multiplier: 1
			},
			{
				name: 'Fée',
				multiplier: 0.5
			}
		],
		evolution: {
			pre: null,
			next: [
				{
					pokedexId: 2,
					name: 'Herbizarre',
					condition: 'Niveau 16'
				},
				{
					pokedexId: 3,
					name: 'Florizarre',
					condition: 'Niveau 32'
				}
			]
		}
	},
	{
		pokedexId: 2,
		generation: 1,
		name: {
			fr: 'Herbizarre',
			en: 'Ivysaur'
		},
		sprites: {
			regular: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/2/regular.png',
			shiny: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/2/shiny.png',
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
			{
				name: 'Normal',
				multiplier: 1
			},
			{
				name: 'Plante',
				multiplier: 0.25
			},
			{
				name: 'Feu',
				multiplier: 2
			},
			{
				name: 'Eau',
				multiplier: 0.5
			},
			{
				name: 'Électrik',
				multiplier: 0.5
			},
			{
				name: 'Glace',
				multiplier: 2
			},
			{
				name: 'Combat',
				multiplier: 0.5
			},
			{
				name: 'Poison',
				multiplier: 1
			},
			{
				name: 'Sol',
				multiplier: 1
			},
			{
				name: 'Vol',
				multiplier: 2
			},
			{
				name: 'Psy',
				multiplier: 2
			},
			{
				name: 'Insecte',
				multiplier: 1
			},
			{
				name: 'Roche',
				multiplier: 1
			},
			{
				name: 'Spectre',
				multiplier: 1
			},
			{
				name: 'Dragon',
				multiplier: 1
			},
			{
				name: 'Ténèbres',
				multiplier: 1
			},
			{
				name: 'Acier',
				multiplier: 1
			},
			{
				name: 'Fée',
				multiplier: 0.5
			}
		],
		evolution: {
			pre: [
				{
					pokedexId: 1,
					name: 'Bulbizarre'
				}
			],
			next: [
				{
					pokedexId: 3,
					name: 'Florizarre',
					condition: 'Niveau 32'
				}
			]
		}
	},
	{
		pokedexId: 3,
		generation: 1,
		name: {
			fr: 'Florizarre',
			en: 'Venusaur'
		},
		sprites: {
			regular: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/3/regular.png',
			shiny: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/3/shiny.png',
			gmax: {
				regular:
					'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/3/gmax-regular.png',
				shiny: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/3/gmax-shiny.png'
			}
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
			{
				name: 'Normal',
				multiplier: 1
			},
			{
				name: 'Plante',
				multiplier: 0.25
			},
			{
				name: 'Feu',
				multiplier: 2
			},
			{
				name: 'Eau',
				multiplier: 0.5
			},
			{
				name: 'Électrik',
				multiplier: 0.5
			},
			{
				name: 'Glace',
				multiplier: 2
			},
			{
				name: 'Combat',
				multiplier: 0.5
			},
			{
				name: 'Poison',
				multiplier: 1
			},
			{
				name: 'Sol',
				multiplier: 1
			},
			{
				name: 'Vol',
				multiplier: 2
			},
			{
				name: 'Psy',
				multiplier: 2
			},
			{
				name: 'Insecte',
				multiplier: 1
			},
			{
				name: 'Roche',
				multiplier: 1
			},
			{
				name: 'Spectre',
				multiplier: 1
			},
			{
				name: 'Dragon',
				multiplier: 1
			},
			{
				name: 'Ténèbres',
				multiplier: 1
			},
			{
				name: 'Acier',
				multiplier: 1
			},
			{
				name: 'Fée',
				multiplier: 0.5
			}
		],
		evolution: {
			pre: [
				{
					pokedexId: '1',
					name: 'Bulbizarre'
				},
				{
					pokedexId: '2',
					name: 'Herbizarre'
				}
			],
			next: null
		}
	},
	{
		pokedexId: 4,
		generation: 1,
		name: {
			fr: 'Salamèche',
			en: 'Charmander'
		},
		sprites: {
			regular: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/4/regular.png',
			shiny: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/4/shiny.png',
			gmax: null
		},
		types: [
			{
				name: 'Feu',
				image: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/feu.png'
			}
		],
		resistances: [
			{
				name: 'Normal',
				multiplier: 1
			},
			{
				name: 'Plante',
				multiplier: 0.5
			},
			{
				name: 'Feu',
				multiplier: 0.5
			},
			{
				name: 'Eau',
				multiplier: 2
			},
			{
				name: 'Électrik',
				multiplier: 1
			},
			{
				name: 'Glace',
				multiplier: 0.5
			},
			{
				name: 'Combat',
				multiplier: 1
			},
			{
				name: 'Poison',
				multiplier: 1
			},
			{
				name: 'Sol',
				multiplier: 2
			},
			{
				name: 'Vol',
				multiplier: 1
			},
			{
				name: 'Psy',
				multiplier: 1
			},
			{
				name: 'Insecte',
				multiplier: 0.5
			},
			{
				name: 'Roche',
				multiplier: 2
			},
			{
				name: 'Spectre',
				multiplier: 1
			},
			{
				name: 'Dragon',
				multiplier: 1
			},
			{
				name: 'Ténèbres',
				multiplier: 1
			},
			{
				name: 'Acier',
				multiplier: 0.5
			},
			{
				name: 'Fée',
				multiplier: 0.5
			}
		],
		evolution: {
			pre: null,
			next: [
				{
					pokedexId: 5,
					name: 'Reptincel',
					condition: 'Niveau 16'
				},
				{
					pokedexId: 6,
					name: 'Dracaufeu',
					condition: 'Niveau 32'
				}
			]
		}
	},
	{
		pokedexId: 5,
		generation: 1,
		name: {
			fr: 'Reptincel',
			en: 'Charmeleon'
		},
		sprites: {
			regular: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/5/regular.png',
			shiny: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/5/shiny.png',
			gmax: null
		},
		types: [
			{
				name: 'Feu',
				image: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/feu.png'
			}
		],
		resistances: [
			{
				name: 'Normal',
				multiplier: 1
			},
			{
				name: 'Plante',
				multiplier: 0.5
			},
			{
				name: 'Feu',
				multiplier: 0.5
			},
			{
				name: 'Eau',
				multiplier: 2
			},
			{
				name: 'Électrik',
				multiplier: 1
			},
			{
				name: 'Glace',
				multiplier: 0.5
			},
			{
				name: 'Combat',
				multiplier: 1
			},
			{
				name: 'Poison',
				multiplier: 1
			},
			{
				name: 'Sol',
				multiplier: 2
			},
			{
				name: 'Vol',
				multiplier: 1
			},
			{
				name: 'Psy',
				multiplier: 1
			},
			{
				name: 'Insecte',
				multiplier: 0.5
			},
			{
				name: 'Roche',
				multiplier: 2
			},
			{
				name: 'Spectre',
				multiplier: 1
			},
			{
				name: 'Dragon',
				multiplier: 1
			},
			{
				name: 'Ténèbres',
				multiplier: 1
			},
			{
				name: 'Acier',
				multiplier: 0.5
			},
			{
				name: 'Fée',
				multiplier: 0.5
			}
		],
		evolution: {
			pre: [
				{
					pokedexId: 4,
					name: 'Salamèche'
				}
			],
			next: [
				{
					pokedexId: 6,
					name: 'Dracaufeu',
					condition: 'Niveau 32'
				}
			]
		}
	},
	{
		pokedexId: 6,
		generation: 1,
		name: {
			fr: 'Dracaufeu',
			en: 'Charizard'
		},
		sprites: {
			regular: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/6/regular.png',
			shiny: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/6/shiny.png',
			gmax: {
				regular:
					'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/6/gmax-regular.png',
				shiny: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/6/gmax-shiny.png'
			}
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
			{
				name: 'Normal',
				multiplier: 1
			},
			{
				name: 'Plante',
				multiplier: 0.25
			},
			{
				name: 'Feu',
				multiplier: 0.5
			},
			{
				name: 'Eau',
				multiplier: 2
			},
			{
				name: 'Électrik',
				multiplier: 2
			},
			{
				name: 'Glace',
				multiplier: 1
			},
			{
				name: 'Combat',
				multiplier: 0.5
			},
			{
				name: 'Poison',
				multiplier: 1
			},
			{
				name: 'Sol',
				multiplier: 0
			},
			{
				name: 'Vol',
				multiplier: 1
			},
			{
				name: 'Psy',
				multiplier: 1
			},
			{
				name: 'Insecte',
				multiplier: 0.25
			},
			{
				name: 'Roche',
				multiplier: 4
			},
			{
				name: 'Spectre',
				multiplier: 1
			},
			{
				name: 'Dragon',
				multiplier: 1
			},
			{
				name: 'Ténèbres',
				multiplier: 1
			},
			{
				name: 'Acier',
				multiplier: 0.5
			},
			{
				name: 'Fée',
				multiplier: 0.5
			}
		],
		evolution: {
			pre: [
				{
					pokedexId: 4,
					name: 'Salamèche'
				},
				{
					pokedexId: 5,
					name: 'Reptincel'
				}
			],
			next: null
		}
	},
	{
		pokedexId: 7,
		generation: 1,
		name: {
			fr: 'Carapuce',
			en: 'Squirtle'
		},
		sprites: {
			regular: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/7/regular.png',
			shiny: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/7/shiny.png',
			gmax: null
		},
		types: [
			{
				name: 'Eau',
				image: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/eau.png'
			}
		],
		resistances: [
			{
				name: 'Normal',
				multiplier: 1
			},
			{
				name: 'Plante',
				multiplier: 2
			},
			{
				name: 'Feu',
				multiplier: 0.5
			},
			{
				name: 'Eau',
				multiplier: 0.5
			},
			{
				name: 'Électrik',
				multiplier: 2
			},
			{
				name: 'Glace',
				multiplier: 0.5
			},
			{
				name: 'Combat',
				multiplier: 1
			},
			{
				name: 'Poison',
				multiplier: 1
			},
			{
				name: 'Sol',
				multiplier: 1
			},
			{
				name: 'Vol',
				multiplier: 1
			},
			{
				name: 'Psy',
				multiplier: 1
			},
			{
				name: 'Insecte',
				multiplier: 1
			},
			{
				name: 'Roche',
				multiplier: 1
			},
			{
				name: 'Spectre',
				multiplier: 1
			},
			{
				name: 'Dragon',
				multiplier: 1
			},
			{
				name: 'Ténèbres',
				multiplier: 1
			},
			{
				name: 'Acier',
				multiplier: 0.5
			},
			{
				name: 'Fée',
				multiplier: 1
			}
		],
		evolution: {
			pre: null,
			next: [
				{
					pokedexId: 8,
					name: 'Carabaffe',
					condition: 'Niveau 16'
				},
				{
					pokedexId: 9,
					name: 'Tortank',
					condition: 'Niveau 36'
				}
			]
		}
	},
	{
		pokedexId: 8,
		generation: 1,
		name: {
			fr: 'Carabaffe',
			en: 'Wartortle'
		},
		sprites: {
			regular: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/8/regular.png',
			shiny: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/8/shiny.png',
			gmax: null
		},
		types: [
			{
				name: 'Eau',
				image: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/eau.png'
			}
		],
		resistances: [
			{
				name: 'Normal',
				multiplier: 1
			},
			{
				name: 'Plante',
				multiplier: 2
			},
			{
				name: 'Feu',
				multiplier: 0.5
			},
			{
				name: 'Eau',
				multiplier: 0.5
			},
			{
				name: 'Électrik',
				multiplier: 2
			},
			{
				name: 'Glace',
				multiplier: 0.5
			},
			{
				name: 'Combat',
				multiplier: 1
			},
			{
				name: 'Poison',
				multiplier: 1
			},
			{
				name: 'Sol',
				multiplier: 1
			},
			{
				name: 'Vol',
				multiplier: 1
			},
			{
				name: 'Psy',
				multiplier: 1
			},
			{
				name: 'Insecte',
				multiplier: 1
			},
			{
				name: 'Roche',
				multiplier: 1
			},
			{
				name: 'Spectre',
				multiplier: 1
			},
			{
				name: 'Dragon',
				multiplier: 1
			},
			{
				name: 'Ténèbres',
				multiplier: 1
			},
			{
				name: 'Acier',
				multiplier: 0.5
			},
			{
				name: 'Fée',
				multiplier: 1
			}
		],
		evolution: {
			pre: [
				{
					pokedexId: 7,
					name: 'Carapuce'
				}
			],
			next: [
				{
					pokedexId: 9,
					name: 'Tortank',
					condition: 'Niveau 16'
				}
			]
		}
	},
	{
		pokedexId: 9,
		generation: 1,
		name: {
			fr: 'Tortank',
			en: 'Blastoise'
		},
		sprites: {
			regular: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/9/regular.png',
			shiny: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/9/shiny.png',
			gmax: {
				regular:
					'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/9/gmax-regular.png',
				shiny: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/9/gmax-shiny.png'
			}
		},
		types: [
			{
				name: 'Eau',
				image: 'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/eau.png'
			}
		],
		resistances: [
			{
				name: 'Normal',
				multiplier: 1
			},
			{
				name: 'Plante',
				multiplier: 2
			},
			{
				name: 'Feu',
				multiplier: 0.5
			},
			{
				name: 'Eau',
				multiplier: 0.5
			},
			{
				name: 'Électrik',
				multiplier: 2
			},
			{
				name: 'Glace',
				multiplier: 0.5
			},
			{
				name: 'Combat',
				multiplier: 1
			},
			{
				name: 'Poison',
				multiplier: 1
			},
			{
				name: 'Sol',
				multiplier: 1
			},
			{
				name: 'Vol',
				multiplier: 1
			},
			{
				name: 'Psy',
				multiplier: 1
			},
			{
				name: 'Insecte',
				multiplier: 1
			},
			{
				name: 'Roche',
				multiplier: 1
			},
			{
				name: 'Spectre',
				multiplier: 1
			},
			{
				name: 'Dragon',
				multiplier: 1
			},
			{
				name: 'Ténèbres',
				multiplier: 1
			},
			{
				name: 'Acier',
				multiplier: 0.5
			},
			{
				name: 'Fée',
				multiplier: 1
			}
		],
		evolution: {
			pre: [
				{
					pokedexId: 7,
					name: 'Carapuce'
				},
				{
					pokedexId: 8,
					name: 'Carabaffe'
				}
			],
			next: null
		}
	}
];
