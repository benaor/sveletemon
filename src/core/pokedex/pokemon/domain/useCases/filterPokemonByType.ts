import type { PokemonList } from '../models/pokemonList.model';
import * as O from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/function';

// You can't use this because it's not a function, juste an example for recursive function
// Here, you can see currying, and recursive function

export const filterPokemonByType =
	(type: string) =>
	([first, ...last]: PokemonList): PokemonList => {
		if (!first) return [];

		const pokemonType = pipe(
			O.fromNullable(first.types),
			O.chain((types) => O.fromNullable(types.find((t) => t.name === type)))
		);

		return O.isSome(pokemonType)
			? [first, ...filterPokemonByType(type)(last)]
			: filterPokemonByType(type)(last);
	};

// Use like this :
// const filterEletric = filterPokemonByType('electric');
// const filtered = filterEletric(listOfPokemon);
