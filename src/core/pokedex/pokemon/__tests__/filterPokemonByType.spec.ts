import { describe, expect, it } from 'vitest';
import { filterPokemonByType } from '../domain/useCases/filterPokemonByType';
import { listOfPokemon } from './fakes/listOfPokemon.fake';

describe('filter pokemon by type', () => {
	it('should contain bulbizarre', () => {
		const filterPlante = filterPokemonByType('Plante');
		const filtered = filterPlante(listOfPokemon);

		const bulbizarre = listOfPokemon.find((pokemon) => pokemon.name.fr === 'Bulbizarre');

		expect(filtered).toContainEqual(bulbizarre);
	});

	it('should contain bulbizarre, Herbizarre and Florizarre', () => {
		const filterPlante = filterPokemonByType('Plante');
		const filtered = filterPlante(listOfPokemon);

		const bulbizarre = listOfPokemon.find((pokemon) => pokemon.name.fr === 'Bulbizarre');
		const herbizarre = listOfPokemon.find((pokemon) => pokemon.name.fr === 'Herbizarre');
		const florizarre = listOfPokemon.find((pokemon) => pokemon.name.fr === 'Florizarre');

		expect(filtered).toContainEqual(bulbizarre);
		expect(filtered).toContainEqual(herbizarre);
		expect(filtered).toContainEqual(florizarre);
	});

	it('should not contain Salamèche', () => {
		const filterPlante = filterPokemonByType('Plante');
		const filtered = filterPlante(listOfPokemon);

		const Salameche = listOfPokemon.find((pokemon) => pokemon.name.fr === 'Salamèche');

		expect(filtered).not.toContainEqual(Salameche);
	});
});
