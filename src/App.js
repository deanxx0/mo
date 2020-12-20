// import { computeHeadingLevel } from "@testing-library/react";
import React from "react";

class Components01 extends React.Component {
  render() {
    return (
      <div>sub components 1.</div>
    )
  }
}
class Components02 extends React.Component {
  render() {
    return (
      <div>sub components 2.</div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {flag : true};
  }
  
  state = {
    flag: true
  }

  handleOnClick = () => {
    if(this.state.flag) {
      this.setState({flag: false});
    } else {
      this.setState({flag: true});
    }

  }

  render() {
    if (this.state.flag) {
      return <button onClick={this.handleOnClick}><Components01/></button>
    } else {
      return <button onClick={this.handleOnClick}><Components02/></button>
    }
  }
}


export default App;

//branch test??