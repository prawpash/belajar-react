import React from 'react';

class ToggleWithParam extends React.Component{
    constructor(props){
        super(props);
        this.state = {btName: props.btName, id: props.id};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        console.log(e);
        console.log(this.props.btName);
        console.log(this.props.id);
        console.log(this.props);
    }

    render(){
        return <button onClick={(e) => this.handleClick(e)}>{this.state.btName}</button>
    }
}

export default ToggleWithParam;