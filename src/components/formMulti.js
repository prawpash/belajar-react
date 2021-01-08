import React from 'react';

class FormMulti extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isGoing: true,
            numberOfGuest: 3
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <form>
                <div>
                    <label>
                        Is Going:
                        <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        Number of Guest:
                        <input type="number" name="numberOfGuest" value={this.state.numberOfGuest} onChange={this.handleInputChange} />
                    </label>
                </div>
            </form>
        );
    }
}

export default FormMulti;