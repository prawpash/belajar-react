import React from 'react';

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};

        // ini biar bisa jalan fungsinya
        this.handle = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render(){
        return <button onClick={this.handle}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
    }
}

export default Toggle;