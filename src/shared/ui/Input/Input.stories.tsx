import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Type text',
        value: '123123',
    },
};
