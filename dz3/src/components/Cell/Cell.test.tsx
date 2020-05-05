import React from 'react';
import { shallow } from 'enzyme';
import { Cell, SHOW, HIDE } from './';
import renderer from 'react-test-renderer';

describe('Cell', () => {
    it('It renders using shallow', () => {
        const wrapper = shallow(<Cell num={3}></Cell>);
        expect(wrapper.html()).toEqual('<article class="game-cell"><span>3</span></article>');
    });

    it('It renders using renderer and is compared to snaphot', () => {
        const snapshot = renderer.create(<Cell num={2}></Cell>).toJSON();
        expect(snapshot).toMatchSnapshot();
    });

    it('OnClick callback is called when cell is clicked', () => {
        const mockCallBack = jest.fn();
        const cell = shallow(<Cell num={2} onClick={mockCallBack}></Cell>);
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
        const cell = shallow(<Cell num={2} onClick={testCallBack}></Cell>);
        cell.find('article').simulate('click');
        expect(receivedCellNumber).toEqual(2);
        expect(receivedCellState).toEqual(SHOW);

        cell.find('article').simulate('click');
        expect(receivedCellNumber).toEqual(2);
        expect(receivedCellState).toEqual(HIDE);
    });
});
