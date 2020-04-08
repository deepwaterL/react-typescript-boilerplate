import React from 'react';

export interface IComponent2Props{}

export interface IComponent2State{}

class Component2 extends React.PureComponent<IComponent2Props, IComponent2State> {
    render() {
        return(
            <div>
                <h1>Component2</h1>
            </div>
        );
    }
}

export default Component2;