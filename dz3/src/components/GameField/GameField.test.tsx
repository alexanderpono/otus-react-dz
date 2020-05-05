import React from 'react';
import { GameField } from './';
import renderer from 'react-test-renderer';

describe('HelloWorld', () => {
    it('It renders using renderer and is compared to snaphot', () => {
        const snapshot = renderer
            .create(<GameField data={['1', '2', '3']} width={60} state={''}></GameField>)
            .toJSON();
        expect(snapshot).toMatchSnapshot();
    });
});
