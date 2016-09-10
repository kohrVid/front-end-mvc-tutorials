import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
  render () {
    return (
      <div>
        Hello!!!
      </div>
    );
  }
}

class HelloUser extends React.Component {
  constructor () {
    super();

    this.state = {
      username: '@kohrVid'
    };
  }
  
  render () {
    return (
      <div>
	Hey there, { this.state.username } <br />
	Change Name: <input type="text" value={ this.state.username } onChange={
	  e => this.setState({ username: e.target.value })
	} />
      </div>
    );
  }
}

ReactDOM.render(<HelloUser/>, document.getElementById("app"));
