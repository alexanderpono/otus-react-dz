import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { HelloWorld } from './';

export default {
    title: 'HelloWorld',
    decorators: [withKnobs]
};

export const WithKnobs = () => {
    const name = text('userName', 'Alex');
    return <HelloWorld userName={name} />;
};
