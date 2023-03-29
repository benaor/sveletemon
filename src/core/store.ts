import { configureStore, type ConfigureStoreOptions } from '@reduxjs/toolkit';
import type { PokemonDetailsRepository } from './pokedex/pokemonDetails/domain/gateways/pokemonDetails.repository';
import { inMemoryPokemonDetails } from './pokedex/pokemonDetails/adapters/inMemoryPokemonDetails';
import { rootReducer as reducer } from './reducers';

export type ThunkExtraArgument = {
	repositories: {
		pokemonDetailsRepository: PokemonDetailsRepository;
	};
};

const thunkExtraArgument: ThunkExtraArgument = {
	repositories: {
		pokemonDetailsRepository: new inMemoryPokemonDetails()
	}
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
