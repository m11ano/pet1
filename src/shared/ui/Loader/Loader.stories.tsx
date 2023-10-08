import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';
import { Loader } from './Loader';

const meta = {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {
    },
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};

export const DefaultDark: Story = {
    args: {
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
