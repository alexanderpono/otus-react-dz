import React from 'react';
import { GameFieldProps } from './interfaces';
import { Cell } from '../Cell';
import './GameField.css';
import { SHOW_ALL } from '.';

export class GameField extends React.Component<GameFieldProps> {
    render() {
        const html = this.props.data.map((item) => {
            return <Cell key={item} num={Number(item)}></Cell>;
        });

        return (
            <section
                className={`game-field${this.props.state == SHOW_ALL ? ' show-all' : ''}`}
                style={{ width: this.props.width }}
            >
                {html}
            </section>
        );
    }
}
