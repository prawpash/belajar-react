import React from 'react';

const scaleNames={
    c:'Celcius',
    f:'Farenheit'
};

function toCelcius(farenheit){
    return(farenheit - 32) * 5 / 9;
}

function toFarenheit(celcius){
    return (celcius * 9 / 5) + 32;
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input))
        return '';
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict(props){
    if(props.celcius >= 100)
        return <p>Thew water would boil.</p>
    return <p>The water would not boil.</p>
}

class CalculatorTemp extends React.Component{
    constructor(props){
        super(props);

        this.handleCelciusChange = this.handleCelciusChange.bind(this);
        this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
        this.state = {temperature: '', scale:'c'};
    }

    handleCelciusChange(temperature){
        this.setState({scale:'c',temperature});
    }

    handleFarenheitChange(temperature){
        this.setState({scale:'f',temperature});
    }

    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celcius = scale === 'f' ? tryConvert(temperature, toCelcius) : temperature;
        const farenheit = scale === 'c' ? tryConvert(temperature, toFarenheit) : temperature;
        return(
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celcius}
                    onTemperatureChange={this.handleCelciusChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={farenheit}
                    onTemperatureChange={this.handleFarenheitChange}
                />
                <BoilingVerdict
                    celcius={parseFloat(celcius)}
                />
            </div>
        );
    }
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);
        // this.state = {temperature:''};
    }

    handleOnChange(e){
        //Before: this.setState({temperature:e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }

    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>Enter Temperature In {scaleNames[scale]}:</legend>
                <input
                    value={temperature}
                    onChange={this.handleOnChange}
                />
                <BoilingVerdict celcius={parseFloat(temperature)}/>
            </fieldset>
        );
    }
}

export default CalculatorTemp;