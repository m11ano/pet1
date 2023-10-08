import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'admin',
                password: '123',
            },
        }),
    ],
};

export const withError: Story = {
    args: {
    },
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'admin',
                password: '123',
                error: 'ERROR',
            },
        }),
    ],
};

export const Loading: Story = {
    args: {
    },
    decorators: [
        StoreDecorator({
            loginForm: {
                isLoading: true,
            },
        }),
    ],
};
