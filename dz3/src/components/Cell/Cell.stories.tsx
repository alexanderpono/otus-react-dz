import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Cell, SHOW } from '.';

export default {
    title: 'Cell',
    decorators: [withKnobs]
};

export const Run = () => {
    const name = number('num', 4);
    return <Cell num={name} state={''} onClick={action('clicked')} />;
};

export const Show = () => {
    const name = number('num', 4);
    return <Cell num={name} state={SHOW} onClick={action('clicked')} />;
};
