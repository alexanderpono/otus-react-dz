import React from 'react';
import './Cell.css';

export interface CellProps {
    num: number;
    showContent: boolean;
    onClick?: Function;
}

export interface CellState {
    showContent: boolean;
}

export class Cell extends React.Component<CellProps, CellState> {
    constructor(props: CellProps) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = { showContent: this.props.showContent === true };
    }

    onClick() {
        const triggeredState = !this.state.showContent;
        this.setState((prevState) => ({ ...prevState, showContent: triggeredState }));
        if (typeof this.props.onClick === 'function') {
            this.props.onClick(this.props.num, this.state.showContent);
        }
    }

    render() {
        return (
            <article
                className={`game-cell ${this.state.showContent ? 'show' : ''}`}
                onClick={this.onClick}
            >
                <span>{this.props.num}</span>
            </article>
        );
    }
}
