import { beforeEach, describe, expect, test, vitest } from 'vitest';
import { createStore, type AppStore } from '../../../store';
import { inMemoryPokemonList } from '../adapters/inMemoryPokemonList';
import {
	pokemonListSelector,
	pokemonListStatusSelector
} from '../application/pokemonList.selector';
import { getListOfPokemon } from '../domain/useCases/getPokemonList.useCase';
import { listOfPokemon } from './fakes/listOfPokemon.fake';

describe('get list of Pokemons', () => {
	let store: AppStore;
	const pokemonListRepository = new inMemoryPokemonList();

	beforeEach(() => {
		store = createStore({
			extraArgs: {
				pokemonListRepository
			}
		});
	});

	describe('Idle cases', () => {
		test('In the store, the list of pokemon is undefined', () => {
			const state = store.getState();
			const pokemonList = pokemonListSelector(state);

			expect(pokemonList).toBeUndefined();
		});

		test('The status of the list of pokemon should be idle', () => {
			const state = store.getState();

			const pokemonListStatus = pokemonListStatusSelector(state);
			expect(pokemonListStatus).toBe('idle');
		});
	});

	describe('pending cases', () => {
		test('The status of the list of pokemon should be idle', () => {
			store.dispatch(getListOfPokemon());
			const state = store.getState();

			const pokemonListStatus = pokemonListStatusSelector(state);
			expect(pokemonListStatus).toBe('loading');
		});
	});

	describe('success cases', () => {
		test('In the store, i should have the list of pokemon', async () => {
			await store.dispatch(getListOfPokemon());

			const state = store.getState();
			const pokemonList = pokemonListSelector(state);

			expect(pokemonList).toEqual(listOfPokemon);
		});

		test('the status of list of pokemons should be succeeded', async () => {
			await store.dispatch(getListOfPokemon());

			const state = store.getState();
			const pokemonListStatus = pokemonListStatusSelector(state);

			expect(pokemonListStatus).toEqual('succeeded');
		});
	});

	describe('failed cases', () => {
		test('In the store, listOfPokemon should be undefined', async () => {
			await store.dispatch(getListOfPokemon());

			vitest
				.spyOn(pokemonListRepository, 'getPokemonList')
				.mockReturnValue(Promise.reject('error'));

			await store.dispatch(getListOfPokemon());

			const state = store.getState();
			const pokemonList = pokemonListSelector(state);

			expect(pokemonList).toBeUndefined();
		});

		test('In the store, status should be error', async () => {
			await store.dispatch(getListOfPokemon());

			vitest
				.spyOn(pokemonListRepository, 'getPokemonList')
				.mockReturnValue(Promise.reject('error'));

			await store.dispatch(getListOfPokemon());

			const state = store.getState();
			const pokemonListStatus = pokemonListStatusSelector(state);

			expect(pokemonListStatus).toBe('failed');
		});
	});
});
