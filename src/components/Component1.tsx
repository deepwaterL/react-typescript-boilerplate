import React from 'react';

export interface IComponent1Props {}

export interface IComponent1State {}

class Component1 extends React.PureComponent<IComponent1Props, IComponent1State> {
    render() {
        return(
            <div>
                <h1>Component1</h1>
            </div>
        );
    }
}

export default Component1;