import React from 'react';
import { withKnobs, array, number } from '@storybook/addon-knobs';

import { GameField } from './GameField';

export default {
    title: 'GameField',
    decorators: [withKnobs]
};

export const Run = () => {
    const width = number('Width, pixels', 60);
    const data = array('Cell numbers', ['1', '2', '3', '4', '5', '6', '7', '8', '9']);
    return <GameField data={data} width={width} showAll={false} />;
};

export const ShowAll = () => {
    const width = number('Width, pixels', 60);
    const data = array('Cell numbers', ['1', '2', '3', '4', '5', '6', '7', '8', '9']);
    return <GameField data={data} width={width} showAll={true} />;
};