import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '../../api/squadUpAPI';
import { APIResponse, TAPIError, TAddTalentReq, TInitialState } from '../../types/types';
import { RootState, Store } from '../store';
import { AxiosError } from 'axios';

export const fetchAllTalents = createAsyncThunk<APIResponse, { limit: number; offset: number }>(
    'talents/fetchAllTalents',
    async ({ limit, offset }) => {
        return API.get(`/talent?limit=${limit}&offset=${offset}`)
            .then(response => {
                return response.data;
            })
            .catch((error: AxiosError<TAPIError>) => {
                if (error.response && error.response.data && error.response.data.message) {
                    throw new Error(error.response.data.message);
                } else {
                    throw error;
                }
            });
    }
);

export const searchByEmail = createAsyncThunk<APIResponse, { limit: number; offset: number, email: string }>(
    'talents/searchByEmail',
    async ({ limit, offset, email }) => {
        return await API.get(`/talent/${email}?limit=${limit}&offset=${offset}`)
            .then(response => {
                return response.data;
            })
            .catch((error: AxiosError<TAPIError>) => {
                Store.dispatch(fetchAllTalents({ limit: limit, offset: 0 }));
                if (error.response && error.response.data && error.response.data.message) {
                    throw new Error(error.response.data.message);
                } else {
                    throw error;
                }
            });
    }
);

export const searchByStack = createAsyncThunk<APIResponse, { limit: number; offset: number, stack: string }>(
    'talents/searchByStack',
    async ({ limit, offset, stack }) => {
        return await API.get(`/talent/search/${stack}?limit=${limit}&offset=${offset}`)
            .then(response => {
                return response.data;
            })
            .catch((error: AxiosError<TAPIError>) => {
                Store.dispatch(fetchAllTalents({ limit: limit, offset: 0 }));
                if (error.response && error.response.data && error.response.data.message) {
                    throw new Error(error.response.data.message);
                } else {
                    throw error;
                }
            });
    }
);

export const addTalent = createAsyncThunk<string | null, TAddTalentReq>(
    'talents/addTalent',
    async (talentData, { getState }) => {
        const { limit } = (getState() as RootState).globalStates;
        return await API.post('/talent', talentData)
            .then(response => {
                Store.dispatch(fetchAllTalents({ limit: limit, offset: 0 }));
                return response.data.message;
            })
            .catch((error: AxiosError<TAPIError>) => {
                if (error.response && error.response.data && error.response.data.message) {
                    throw new Error(error.response.data.message);
                } else {
                    throw error;
                }
            });
    }
);

export const updateTalent = createAsyncThunk<string | null, { talentData: TAddTalentReq, talentId: string }>(
    'talents/updateTalent',
    async ({ talentData, talentId }, { getState }) => {
        const { limit } = (getState() as RootState).globalStates;
        return await API.patch(`/talent/${talentId}`, talentData)
            .then(response => {
                Store.dispatch(fetchAllTalents({ limit: limit, offset: 0 }));
                return response.data.message;
            })
            .catch((error: AxiosError<TAPIError>) => {
                if (error.response && error.response.data && error.response.data.message) {
                    throw new Error(error.response.data.message);
                } else {
                    throw error;
                }
            });
    }
);

export const deleteTalent = createAsyncThunk<string | null, string>(
    'talents/deleteTalent',
    async (talentId, { getState }) => {
        const { limit } = (getState() as RootState).globalStates;
        return await API.delete(`/talent/${talentId}`)
            .then(response => {
                Store.dispatch(fetchAllTalents({ limit: limit, offset: 0 }));
                return response.data.message;
            })
            .catch((error: AxiosError<TAPIError>) => {
                if (error.response && error.response.data && error.response.data.message) {
                    throw new Error(error.response.data.message);
                } else {
                    throw error;
                }
            });
    }
);

const initialState: TInitialState = {
    talents: [],
    loading: false,
    error: null,
    total: 0,
    message: null,
};

export const talentsSlice = createSlice({
    name: 'talents',
    initialState: initialState,
    reducers: {
        limparError: (state) => {
            state.error = null;
        },
        limparMessage: (state) => {
            state.message = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllTalents.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllTalents.fulfilled, (state, action) => {
                state.loading = false;
                state.talents = action.payload.results;
                state.total = action.payload.total;
            })
            .addCase(fetchAllTalents.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Erro ao buscar talentos.';
            })
            .addCase(searchByEmail.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.total = 1;
            })
            .addCase(searchByEmail.fulfilled, (state, action) => {
                state.loading = false;
                state.talents = action.payload.results;
                state.total = action.payload.total;
            })
            .addCase(searchByEmail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Erro ao buscar talentos.';
                state.talents = [];
            })
            .addCase(searchByStack.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.total = 1;
            })
            .addCase(searchByStack.fulfilled, (state, action) => {
                state.loading = false;
                state.talents = action.payload.results;
                state.total = action.payload.total;
            })
            .addCase(searchByStack.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Erro ao buscar talentos.';
                state.talents = [];
            })
            .addCase(addTalent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addTalent.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload;
            })
            .addCase(addTalent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Erro ao adicionar talento.';
            })
            .addCase(updateTalent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateTalent.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload;
            })
            .addCase(updateTalent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Erro ao atualizar talento.';
            })
            .addCase(deleteTalent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteTalent.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload;
            })
            .addCase(deleteTalent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Erro ao excluir talento.';
            });
    },
});

export const { limparMessage, limparError } = talentsSlice.actions;