import React from 'react';
import { GameField } from './GameField';
import renderer from 'react-test-renderer';

describe('HelloWorld', () => {
    it('It renders using renderer and is compared to snaphot', () => {
        const snapshot = renderer
            .create(<GameField w={3} h={1} showAll={false}></GameField>)
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
              -webkit-transition-property: opacity;
              transition-property: opacity;
              -webkit-transition-duration: 0.3s;
              transition-duration: 0.3s;
              -webkit-transition-timing-function: ease-out;
              transition-timing-function: ease-out;
              opacity: 0%;
            }

            .emotion-0.show {
              opacity: 100%;
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
                  className=" emotion-0"
                >
                  0
                </span>
              </article>
              <article
                className="emotion-1"
                onClick={[Function]}
              >
                <span
                  className=" emotion-0"
                >
                  1
                </span>
              </article>
              <article
                className="emotion-1"
                onClick={[Function]}
              >
                <span
                  className=" emotion-0"
                >
                  2
                </span>
              </article>
            </section>
        `);
    });
});
