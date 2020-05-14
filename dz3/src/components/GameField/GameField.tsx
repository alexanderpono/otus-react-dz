import React from 'react';
import { Cell } from '../Cell';
import './GameField.css';

export interface GameFieldProps {
    data: string[];
    width: number;
    showAll: boolean;
}

export class GameField extends React.Component<GameFieldProps> {
    render() {
        return (
            <section
                className={`game-field${this.props.showAll ? ' show-all' : ''}`}
                style={{ width: this.props.width }}
            >
                {this.props.data.map((item) => {
                    return <Cell key={item} num={Number(item)} showContent={false}></Cell>;
                })}
            </section>
        );
    }
}
