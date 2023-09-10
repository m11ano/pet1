import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [
        StoreDecorator({
            user: {
                authData: undefined,
            },
        }),
    ],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: {
                authData: undefined,
            },
        }),
    ],
};

export const LightAuthed: Story = {
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'Test',
                },
            },
        }),
    ],
};

export const DarkAuthed: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'Test',
                },
            },
        }),
    ],
};
