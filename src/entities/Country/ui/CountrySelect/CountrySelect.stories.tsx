import type { Meta, StoryObj } from '@storybook/react';

import { CountrySelect } from './CountrySelect';

const meta = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof CountrySelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
