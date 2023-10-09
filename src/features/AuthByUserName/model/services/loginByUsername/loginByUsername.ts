import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

type LoginByUsernameRejectValue = 'incorrect_login';

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<LoginByUsernameRejectValue>>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const { dispatch, extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.post<User>('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            // extra.navigate?.('/profile');

            return response.data;
        } catch (e: unknown) {
            console.log((e as Error).message);
            return rejectWithValue('incorrect_login');
        }
    },
);
