import React from 'react';
import styled from '@emotion/styled';

export const CELL_WIDTH = 20;
export const CELL_HEIGHT = 20;
export const CELL_DEAD = false;
export const CELL_LIVE = true;

const Article = styled.article`
    display: block;
    width: ${CELL_WIDTH - 2}px;
    height: ${CELL_HEIGHT - 2}px;
    text-align: center;
    border: 1px solid red;
    float: left;
`;

const Span = styled.span`
    transition-property: opacity;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    opacity: 0%;

    &.show {
        opacity: 100%;
    }
`;

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
            this.props.onClick(this.props.num, triggeredState);
        }
    }

    render() {
        return (
            <Article onClick={this.onClick}>
                <Span className={this.state.showContent ? 'show' : ''}>{this.props.num}</Span>
            </Article>
        );
    }
}
