import React from 'react';

function FormattedDate(props){
    return <h2>Jam {props.date.toLocaleTimeString()}</h2>;
}

class Tick extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    
    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        return(
            <FormattedDate date={this.state.date}/>
        );
    }
}


export default Tick;