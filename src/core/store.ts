import { configureStore, type ConfigureStoreOptions } from '@reduxjs/toolkit';
import type { PokemonDetailsRepository } from './pokedex/pokemon/domain/gateways/pokemonDetails.repository';
import { inMemoryPokemonDetails } from './pokedex/pokemon/adapters/inMemoryPokemonDetails';
import { rootReducer as reducer } from './reducers';
import type { PokemonListRepository } from './pokedex/pokemon/domain/gateways/PokemonList.repository';
import { inMemoryPokemonList } from './pokedex/pokemon/adapters/inMemoryPokemonList';

export type ThunkExtraArgument = {
	pokemonDetailsRepository: PokemonDetailsRepository;
	pokemonListRepository: PokemonListRepository;
};

const thunkExtraArgument: ThunkExtraArgument = {
	pokemonDetailsRepository: new inMemoryPokemonDetails(),
	pokemonListRepository: new inMemoryPokemonList()
};

type CreateStoreOptions = {
	preloadedState?: ConfigureStoreOptions['preloadedState'];
	extraArgs?: Partial<ThunkExtraArgument>;
};

export const createStore = ({ preloadedState, extraArgs }: CreateStoreOptions) => {
	const store = configureStore({
		reducer,
		middleware(getDefaultMiddleware) {
			return getDefaultMiddleware({
				thunk: {
					extraArgument: {
						...thunkExtraArgument,
						...extraArgs
					}
				}
			});
		},
		preloadedState
	});

	return store;
};

export type AppStore = ReturnType<typeof createStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
