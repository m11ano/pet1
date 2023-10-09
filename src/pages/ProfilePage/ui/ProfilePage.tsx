import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    ProfileCard,
    ValidateProfileError,
    fetchProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    profileReducer,
} from '@/entities/Profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileForm } from '@/entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Text } from '@/shared/ui/Text/Text';
import { getUserAuthData } from '@/entities/User';
import cls from './ProfilePage.module.scss';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const authUser = useSelector(getUserAuthData);

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const { t } = useTranslation('profile');

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: 'Серверная ошибка при сохранении',
        [ValidateProfileError.INCORRECT_USER_DATA]: 'Имя и фамилия обязательны',
        [ValidateProfileError.INCORRECT_AGE]: 'Некорректный адрес',
        [ValidateProfileError.INCORRECT_COUNTRY]: 'Некорректный регион',
        [ValidateProfileError.NO_DATA]: 'Данные не указаны',
    };

    useEffect(() => {
        if (__PROJECT__ !== 'storybook' && authUser) {
            dispatch(fetchProfileData(authUser.id));
        }
    }, [dispatch, authUser]);

    const onChangeFirstname = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ first: value || '' }));
        },
        [dispatch],
    );

    const onChangeLastname = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || '' }));
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }));
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value: string) => {
            value = value.replace(/\D+/gm, '');
            dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ username: value || '' }));
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }));
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (value: Currency) => {
            dispatch(profileActions.updateProfile({ currency: value }));
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (value: Country) => {
            dispatch(profileActions.updateProfile({ country: value }));
        },
        [dispatch],
    );

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length &&
                    validateErrors.map((err) => (
                        <Text
                            theme="error"
                            text={t(validateErrorTranslates[err])}
                            key={err}
                        />
                    ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
