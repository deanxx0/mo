// import { computeHeadingLevel } from "@testing-library/react";
import React from "react";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {flag : true};
  //   this.handleOnClick = this.handleOnClick.bind(this);
  // }
  
  state = {
    flag: true
  }

  handleOnClick = () => {
    if(this.state.flag === true) {
      this.setState({flag: false});
    } else {
      this.setState({flag: true});
    }
  }

  render() {
    if (this.state.flag === true) {
      return <button onClick={this.handleOnClick}>log out</button>
    } else {
      return <button onClick={this.handleOnClick}>log in</button>
    }
  }
}

export default App;

//branch test??