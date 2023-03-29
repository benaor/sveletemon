import { afterEach, beforeEach, describe, expect, it, vitest } from 'vitest';
import {
	pokemonDetailsSelector,
	pokemonDetailsStatusSelector
} from '../application/pokemonDetails.selector';
import { getPokemonDetails } from '../domain/useCases/getPokemonDetails.useCase';
import { createStore, type AppStore } from '../../../store';
import { inMemoryPokemonDetails } from '../adapters/inMemoryPokemonDetails';
import { bulbizarre, pikachu } from './fakes/pokemon.fake';

describe('PokemonDetails UseCase', () => {
	let store: AppStore;

	beforeEach(() => {
		store = createStore({
			extraArgs: {
				repositories: {
					pokemonDetailsRepository: new inMemoryPokemonDetails()
				}
			}
		});
	});

	afterEach(() => {
		vitest.restoreAllMocks();
	});

	describe('pokemon store', () => {
		it('should have undefined value for pokemonDetails', () => {
			// Arrange
			const state = store.getState();
			const pokemonDetails = pokemonDetailsSelector(state);

			// Assert
			expect(pokemonDetails).toBeUndefined();
		});

		describe('success case', () => {
			it('I call getPokemonDetails with idPokedex 25, I should have pikachu in the store', async () => {
				// Act
				await store.dispatch(getPokemonDetails(25));

				const state = store.getState();
				const pokemonDetails = pokemonDetailsSelector(state);

				// Assert
				expect(pokemonDetails).toEqual(pikachu);
			});

			it('I call getPokemonDetails with idPokedex 1, I should have bulbizarre in the store', async () => {
				// Act
				await store.dispatch(getPokemonDetails(1));

				const state = store.getState();
				const pokemonDetails = pokemonDetailsSelector(state);

				// Assert
				expect(pokemonDetails).toEqual(bulbizarre);
			});

			it('If my call is Ok, i should have a status succeded in a store', async () => {
				// Act
				await store.dispatch(getPokemonDetails(1));

				const state = store.getState();
				const status = pokemonDetailsStatusSelector(state);

				// Assert
				expect(status).toEqual('succeeded');
			});
		});

		describe('failure case', () => {
			it('I should have "data : undefined" in the store ', async () => {
				// Act
				await store.dispatch(getPokemonDetails(0)); // Zero doesn't exist

				// Assert
				const state = store.getState();
				const pokemonDetails = pokemonDetailsSelector(state);
				expect(pokemonDetails).toBeUndefined();
			});

			it('I should have "status: failed" in the store ', async () => {
				// Act
				await store.dispatch(getPokemonDetails(0)); // Zero doesn't exist

				// Assert
				const state = store.getState();
				const pokemonDetailsStatus = pokemonDetailsStatusSelector(state);
				expect(pokemonDetailsStatus).toBe('failed');
			});
		});

		describe('pending case', () => {
			it('I should have "status: loading" in the store ', async () => {
				// Act
				store.dispatch(getPokemonDetails(1));

				// Assert
				const state = store.getState();
				const pokemonDetailsStatus = pokemonDetailsStatusSelector(state);
				expect(pokemonDetailsStatus).toBe('loading');
			});
		});
	});
});
