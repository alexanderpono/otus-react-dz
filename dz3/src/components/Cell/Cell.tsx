import React from 'react';
import styled from '@emotion/styled';

const Article = styled.article`
    display: block;
    width: 18px;
    height: 18px;
    text-align: center;
    border: 1px solid red;
    float: left;
`;

export interface SpanProps {
    display: string;
}

const Span = styled.span<SpanProps>`
    display: ${(props) => props.display};
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
                <Span display={this.state.showContent ? 'inline' : 'none'}>{this.props.num}</Span>
            </Article>
        );
    }
}
