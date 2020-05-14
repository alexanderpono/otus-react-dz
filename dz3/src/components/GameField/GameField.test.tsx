import React from 'react';
import { GameField } from './GameField';
import renderer from 'react-test-renderer';

describe('HelloWorld', () => {
    it('It renders using renderer and is compared to snaphot', () => {
        const snapshot = renderer
            .create(<GameField data={['1', '2', '3']} width={60} showAll={false}></GameField>)
            .toJSON();
        expect(snapshot).toMatchInlineSnapshot(`
            .emotion-1 {
              display: block;
              width: 18px;
              height: 18px;
              text-align: center;
              border: 1px solid red;
              float: left;
            }

            .emotion-0 {
              display: none;
            }

            <section
              style={
                Object {
                  "width": 60,
                }
              }
            >
              <article
                className="emotion-1"
                onClick={[Function]}
              >
                <span
                  className="emotion-0"
                  display="none"
                >
                  1
                </span>
              </article>
              <article
                className="emotion-1"
                onClick={[Function]}
              >
                <span
                  className="emotion-0"
                  display="none"
                >
                  2
                </span>
              </article>
              <article
                className="emotion-1"
                onClick={[Function]}
              >
                <span
                  className="emotion-0"
                  display="none"
                >
                  3
                </span>
              </article>
            </section>
        `);
    });
});
