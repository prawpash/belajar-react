import React from 'react';

class NameForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {value:''};
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange(event){
        this.setState({
            value: event.target.value
        });
    }

    handleOnSubmit(event){
        alert('Hello, ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleOnSubmit}>
                <label>
                    Name:
                    <input type="text" onChange={this.handleOnChange} value={this.state.value}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
        );
    }
}

export default NameForm;