import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/storybook.png';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof ProfilePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'Test',
                },
            },
            profile: {
                readonly: true,
                form: {
                    id: '1',
                    username: 'admin',
                    age: 22,
                    country: Country.Kazahstan,
                    lastname: 'test',
                    first: 'kirill',
                    city: 'testcity',
                    currency: Currency.EUR,
                    avatar: AvatarImg,
                },
            },
        }),
    ],
};

export const Dark: Story = {
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'Test',
                },
            },
            profile: {
                readonly: true,
                form: {
                    id: '1',
                    username: 'admin',
                    age: 22,
                    country: Country.Kazahstan,
                    lastname: 'test',
                    first: 'kirill',
                    city: 'testcity',
                    currency: Currency.EUR,
                    avatar: AvatarImg,
                },
            },
        }),
        ThemeDecorator(Theme.DARK),
    ],
};


export const Editing: Story = {
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'Test',
                },
            },
            profile: {
                readonly: false,
                form: {
                    id: '1',
                    username: 'admin',
                    age: 22,
                    country: Country.Kazahstan,
                    lastname: 'test',
                    first: 'kirill',
                    city: 'testcity',
                    currency: Currency.EUR,
                    avatar: AvatarImg,
                },
            },
        }),
    ],
};