import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

const meta = {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Укажите значение',
        options: [
            { value: '1', content: 'Первый пункт' },
            { value: '2', content: 'Второй пункт' },
        ],
    },
};
