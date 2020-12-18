import React, { Component } from "react";
import { withThings } from "./ThingProvider";
import ThingForm from './ThingForm'
import ThingList from './ThingList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      imgUrl: ''
    };
  }

  componentDidMount() {
    this.props.getThings();
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    const newThing = {
      title: this.state.title,
      description: this.state.description,
      imgUrl: this.state.imgUrl
    }

    this.props.addThing(newThing)

    this.setState({
      title: '',
      description: '',
      imgUrl: ''
    })
  }

  render() {
    return (
      <div>
        <ThingForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          btnText="Add Thing"
          {...this.state}
        />
        <ThingList
          things={this.props.things}
          deleteThing={this.props.deleteThing}
          editThing={this.props.editThing}
        />
      </div>
    );
  }
}

export default withThings(App);
