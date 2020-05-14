import React from 'react';
import { GameField } from './GameField';
import renderer from 'react-test-renderer';

describe('HelloWorld', () => {
    it('It renders using renderer and is compared to snaphot', () => {
        const snapshot = renderer
            .create(<GameField data={['1', '2', '3']} width={60} showAll={false}></GameField>)
            .toJSON();
        expect(snapshot).toMatchInlineSnapshot(`
            <section
              className="game-field"
              style={
                Object {
                  "width": 60,
                }
              }
            >
              <article
                className="game-cell "
                onClick={[Function]}
              >
                <span>
                  1
                </span>
              </article>
              <article
                className="game-cell "
                onClick={[Function]}
              >
                <span>
                  2
                </span>
              </article>
              <article
                className="game-cell "
                onClick={[Function]}
              >
                <span>
                  3
                </span>
              </article>
            </section>
        `);
    });
});
