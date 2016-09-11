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

//Parent Component
class HelloUser extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      username: '@kohrVid',
      stuffedAnimals: ["Azul the Bear", "Pandora the Panda", "Lucretzia Purrgia", "Nikki the Pikachu"]
    };

    this.handelAdd = this.handleAdd.bind(this);
  }

  handleAdd (toy) {
    var newToys =  this.state.stuffedAnimals.concat([toy])
    this.setState({
      stuffedAnimals: newToys
    });
  }

  handleRemove(i) {
    var newToys = this.state.stuffedAnimals.slice();
    newToys.splice(i, 1);
    this.setState({
      stuffedAnimals: newToys
    });
  }
  
  render () {
    return (
      <div>
	<h1>
	  Hey there, { this.state.username }
	</h1>
	<p>
	  Change Name: <input type="text" value={ this.state.username } onChange={
	    e => this.setState({ username: e.target.value })
	  } />
	</p>
	<h2>
	  These are my stuffed animals:
	</h2>
	<p>
	  <ShowList names={ this.state.stuffedAnimals } />
	</p>
	<p>
	  Add Toy: <input type="text" id="newToy" name="newToy" />
	  <button onClick={
	    () =>  this.handleAdd(document.getElementById("newToy").value)
	  }>Add Toy</button>
	</p>
      </div>
    );
  }
}

//Child Component
class ShowList extends React.Component {
  render () {
    var listItems = this.props.names.map(function (toy) {
      return (
	<li>{ toy }</li>
      );
    });
    return (
      <div>
	<ul>
	  { listItems }
	</ul>
      </div>
    )
  }
}

ReactDOM.render(<HelloUser/>, document.getElementById("app"));
