import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/storybook.png';
import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof ProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        data: {
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
};

export const Dark: Story = {
    args: {
        data: {
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
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithError: Story = {
    args: {
        error: 'test error',
    },
};

export const WithLoading: Story = {
    args: {
        isLoading: true,
    },
};
