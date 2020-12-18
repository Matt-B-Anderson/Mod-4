import React, { Component } from 'react'
import ThingForm from './ThingForm'

class Thing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editToggle: false,
            title: props.title,
            description: props.description,
            imgUrl: props.imgUrl
        }
    }

    toggler = () => {
        this.setState(prevState => ({
            editToggle: !prevState.editToggle
        }))
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const thingID = this.props._id
        const updateThing = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl
        }
        this.props.editThing(thingID, updateThing)
        this.setState({
            title: '',
            description: '',
            imgUrl: '',
            editToggle: false
        })
    }

    render() {
        return (
            <div>
                { !this.state.editToggle ?

                    <>
                        <h2>{this.props.title}</h2>
                        <p>{this.props.description}</p>
                        <div className="uglies-image" style={{ backgroundImage: `url(${this.props.imgUrl})` }}>
                            <button className='edit' onClick={this.toggler}>Edit</button>
                            <button className='delete' onClick={() => this.props.deleteThing(this.props._id)}>Delete</button>
                        </div>
                    </>
                    :
                    <>
                        <ThingForm
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            title={this.state.title}
                            description={this.state.description}
                            imgUrl={this.state.imgUrl}
                            btnText="Submit Edit"
                        />
                        <button onClick={this.toggler}>Close Edit</button>
                    </>
                }
            </div>
        )
    }
}

export default Thing