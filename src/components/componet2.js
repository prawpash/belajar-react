import React from 'react';

class Component2 extends React.Component{
    render(){
        if(!this.props.nama)
            return null;
        return <h1>Hello, {this.props.nama}</h1>
    }
}

export default Component2;