import React from 'react';
import { CellProps, CellState, SHOW, HIDE } from '.';
import './Cell.css';

export class Cell extends React.Component<CellProps, CellState> {
    constructor(props: CellProps) {
        super(props);
        this.cl = this.cl.bind(this);
        const newInnerState = this.props.state === SHOW ? SHOW : HIDE;
        this.state = { show: newInnerState };
    }

    cl() {
        const triggeredState = this.state.show === SHOW ? HIDE : SHOW;
        const newState = Object.assign({}, this.state, { show: triggeredState });
        this.setState(newState);
        if (typeof this.props.onClick === 'function') {
            this.props.onClick(this.props.num, this.state.show);
        }
    }

    render() {
        return (
            <article
                className={`game-cell${this.state.show == SHOW ? ' show' : ''}`}
                onClick={this.cl}
            >
                <span>{this.props.num}</span>
            </article>
        );
    }
}
