import React from 'react';
import { shallow } from 'enzyme';
import { Cell } from './Cell';
import renderer from 'react-test-renderer';

describe('Cell', () => {
    it('It renders using shallow cell with value=3', () => {
        const wrapper = shallow(<Cell num={3} showContent={false}></Cell>);
        expect(wrapper.html()).toEqual('<article class="game-cell "><span>3</span></article>');
    });

    it('It renders using renderer cell with value=2', () => {
        const snapshot = renderer.create(<Cell num={2} showContent={false}></Cell>).toJSON();
        expect(snapshot).toMatchSnapshot();
    });

    it('OnClick callback is called when cell is clicked', () => {
        const mockCallBack = jest.fn();
        const cell = shallow(<Cell num={2} onClick={mockCallBack} showContent={false}></Cell>);
        cell.find('article').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    it('Says number of cell and says show state when cell is clicked', () => {
        let receivedCellNumber = 0;
        let receivedCellState = '';
        const testCallBack = function (cellNumber: number, newState: string) {
            receivedCellNumber = cellNumber;
            receivedCellState = newState;
        };
        const cell = shallow(<Cell num={2} onClick={testCallBack} showContent={false}></Cell>);
        cell.find('article').simulate('click');
        expect(receivedCellNumber).toEqual(2);
        expect(receivedCellState).toEqual(true);

        cell.find('article').simulate('click');
        expect(receivedCellNumber).toEqual(2);
        expect(receivedCellState).toEqual(false);
    });
});
