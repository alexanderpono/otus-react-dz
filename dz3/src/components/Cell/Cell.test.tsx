import React from 'react';
import { mount } from 'enzyme';
import { Cell } from './Cell';
import renderer from 'react-test-renderer';

describe('Cell', () => {
    it('It renders using renderer cell with value=2', () => {
        const snapshot = renderer.create(<Cell num={2} showContent={false}></Cell>).toJSON();
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
        `);
    });

    it('OnClick callback is called when cell is clicked', () => {
        const mockCallBack = jest.fn();
        const cell = mount(<Cell num={2} onClick={mockCallBack} showContent={false}></Cell>);
        cell.find('article').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    it('Says number of cell and says show state when cell is clicked', () => {
        let receivedCellNumber = 0;
        let receivedCellState = null;
        const testCallBack = function (cellNumber: number, newState: boolean) {
            receivedCellNumber = cellNumber;
            receivedCellState = newState;
        };
        const cell = mount(<Cell num={2} onClick={testCallBack} showContent={false}></Cell>);
        cell.find('article').simulate('click');
        expect(receivedCellNumber).toEqual(2);
        expect(receivedCellState).toEqual(true);

        cell.find('article').simulate('click');
        expect(receivedCellNumber).toEqual(2);
        expect(receivedCellState).toEqual(false);
    });
});
