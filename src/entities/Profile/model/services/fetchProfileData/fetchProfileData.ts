import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

type fetchProfileDataRejectValue = string;

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<fetchProfileDataRejectValue>>(
    'profile/fetchProfileData',
    async (profileId, thunkApi) => {
        const {
            dispatch,
            extra,
            rejectWithValue,
        } = thunkApi;

        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e:unknown) {
            console.log((e as Error).message);
            return rejectWithValue('error');
        }
    },
);
