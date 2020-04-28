import React from 'react';
import { HelloWorldProps } from './interfaces';

export class HelloWorld extends React.Component<HelloWorldProps> {
    constructor(props: HelloWorldProps) {
        super(props);
    }

    render() {
        return <div>Hello World, {this.props.userName}</div>;
    }
}
