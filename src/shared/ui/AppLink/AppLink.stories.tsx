import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'TEXT',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'TEXT',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const Secondary: Story = {
    args: {
        children: 'TEXT',
        theme: AppLinkTheme.SECONDARY,
    },
};

export const SecondaryDark: Story = {
    args: {
        children: 'TEXT',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
