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

ReactDOM.render(<Hello/>, document.getElementById("app"));
