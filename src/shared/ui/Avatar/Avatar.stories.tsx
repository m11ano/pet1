import type { Meta, StoryObj } from '@storybook/react';

import AvatarImg from '@/shared/assets/tests/storybook.png';
import { Avatar } from './Avatar';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};

export const Small: Story = {
    args: {
        size: 50,
        src: AvatarImg,
    },
};
