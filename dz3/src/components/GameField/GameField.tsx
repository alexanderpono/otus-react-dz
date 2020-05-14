import React from 'react';
import { Cell } from '../Cell';

export interface GameFieldProps {
    data: string[];
    width: number;
    showAll: boolean;
}

export class GameField extends React.Component<GameFieldProps> {
    render() {
        return (
            <section style={{ width: this.props.width }}>
                {this.props.data.map((item) => {
                    return (
                        <Cell key={item} num={Number(item)} showContent={this.props.showAll}></Cell>
                    );
                })}
            </section>
        );
    }
}
