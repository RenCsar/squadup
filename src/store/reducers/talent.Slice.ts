import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '../../api/squadUpAPI';
import { APIResponse, TAddTalentReq, TInitialState, TTalent } from '../../utils/types';

export const fetchAllTalents = createAsyncThunk<APIResponse, { limit: number; offset: number }>(
    'talents/fetchAllTalents',
    async ({ limit, offset }) => {
        try {
            const response = await API.get(`/talent?limit=${limit}&offset=${offset}`);
            return response.data;
        } catch (error: any) {
            if (error.response && error.response.data && error.response.data.message) {
                throw new Error(error.response.data.message);
            } else {
                throw error;
            }
        }
    }
);

export const searchByEmail = createAsyncThunk<APIResponse, { limit: number; offset: number, email: string }>(
    'talents/searchByEmail',
    async ({ limit, offset, email }) => {
        try {
            const response = await API.get(`/talent/${email}?limit=${limit}&offset=${offset}`);
            return response.data;
        } catch (error: any) {
            if (error.response && error.response.data && error.response.data.message) {
                throw new Error(error.response.data.message);
            } else {
                throw error;
            }
        }
    }
);

export const searchByStack = createAsyncThunk<APIResponse, { limit: number; offset: number, stack: string }>(
    'talents/searchByStack',
    async ({ limit, offset, stack }) => {
        try {
            const response = await API.get(`/talent/search/${stack}?limit=${limit}&offset=${offset}`);
            return response.data;
        } catch (error: any) {
            if (error.response && error.response.data && error.response.data.message) {
                throw new Error(error.response.data.message);
            } else {
                throw error;
            }
        }
    }
);

export const addTalent = createAsyncThunk<void, TAddTalentReq>(
    'talents/addTalent',
    async (talentData) => {
        try {
            await API.post('/talent', talentData);
        } catch (error: any) {
            if (error.response && error.response.data && error.response.data.message) {
                throw new Error(error.response.data.message);
            } else {
                throw error;
            }
        }
    }
);

export const updateTalent = createAsyncThunk<string | null, { talentData: TAddTalentReq, talentId: string }>(
    'talents/updateTalent',
    async ({ talentData, talentId }) => {
        try {
            const response = await API.patch(`/talent/${talentId}`, talentData);
            return response.data.messege
        } catch (error: any) {
            if (error.response && error.response.data && error.response.data.message) {
                throw new Error(error.response.data.message);
            } else {
                throw error;
            }
        }
    }
);

export const deleteTalent = createAsyncThunk<void, string>(
    'talents/deleteTalent',
    async (talentId) => {
        try {
            await API.delete(`/talent/${talentId}`);
        } catch (error: any) {
            if (error.response && error.response.data && error.response.data.message) {
                throw new Error(error.response.data.message);
            } else {
                throw error;
            }
        }
    }
);

const initialState: TInitialState = {
    talents: [],
    loading: false,
    error: null,
    nextUrl: null,
    previuosUrl: null,
    limit: 0,
    offset: 0,
    total: 0,
    message: null,
};

export const talentsSlice = createSlice({
    name: 'talents',
    initialState: initialState,
    reducers: {
        deleteTalentLocal: (state, action) => {
            state.talents = state.talents.filter((talent: TTalent) => talent.id !== action.payload);
        },
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
            .addCase(addTalent.fulfilled, (state) => {
                state.loading = false;
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
            .addCase(deleteTalent.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(deleteTalent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Erro ao excluir talento.';
            });
    },
});

export const { deleteTalentLocal, limparMessage, limparError } = talentsSlice.actions;