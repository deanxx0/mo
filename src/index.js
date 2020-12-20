import React from 'react';
import ReactDOM from 'react-dom';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

// eslint-disable-next-line
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
// eslint-disable-next-line
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
// eslint-disable-next-line
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.fromParent(e.target.value)
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temperatureC: '',
      temperatureF: ''
    }
  }

  onTemperatureCChange = (value) => {
    console.log('on temperatureC : ',value)
    this.setState({temperatureC: value, temperatureF: toFahrenheit(value)});
  }

  onTemperatureFChange = (value) => {
    console.log('on temperatureF : ',value)
    this.setState({temperatureC: toCelsius(value), temperatureF: value});
    
  }

  render() {
    return (
      <div>
        <TemperatureInput scale="c" fromParent={this.onTemperatureCChange} temperature={this.state.temperatureC}/>
        <TemperatureInput scale="f" fromParent={this.onTemperatureFChange} temperature={this.state.temperatureF}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);