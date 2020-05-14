import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Cell } from './Cell';

export default {
    title: 'Cell',
    decorators: [withKnobs]
};

export const Run = () => {
    const name = number('num', 4);
    return <Cell num={name} showContent={false} onClick={action('clicked')} />;
};

export const Show = () => {
    const name = number('num', 4);
    return <Cell num={name} showContent={true} onClick={action('clicked')} />;
};
