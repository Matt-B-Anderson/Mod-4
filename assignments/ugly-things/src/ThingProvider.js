import React, { Component } from 'react'
import axios from 'axios'

const ThingContext = React.createContext()

class ThingProvider extends Component {
    constructor() {
        super()
        this.state = {
            things: []

        }
    }

    getThings = () => {
        axios.get('https://api.vschool.io/matthewanderson/thing')
            .then(res => {
                this.setState({
                    things: res.data
                })
            })
            .catch(err => console.log(err))
    }

    addThing = (newThing) => {
        axios.post('https://api.vschool.io/matthewanderson/thing', newThing)
            .then(res => {
                this.setState(prevState => ({
                    things: [...prevState.things, res.data]
                }))
            })
            .catch(err => console.log(err))
    }

    deleteThing = (thingID) => {
        axios.delete(`https://api.vschool.io/matthewanderson/thing/${thingID}`)
            .then(res => {
                alert(res.data.msg)
                this.setState(prevState => ({
                    things: prevState.things.filter(thing => thing._id !== thingID)
                }))
            })
            .catch(err => console.log(err))
    }

    editThing = (thingID, updateThing) => {
        axios.put(`https://api.vschool.io/matthewanderson/thing/${thingID}`, updateThing)
            .then(res => {
                this.setState(prevState => ({
                    things: prevState.things.map(thing => thing._id === thingID ? res.data : thing)
                }))
            })
            .catch(err => console.log(err))

    }

    render() {
        return (
            <ThingContext.Provider value={{
                things: this.state.things,
                getThings: this.getThings,
                addThing: this.addThing,
                deleteThing: this.deleteThing,
                editThing: this.editThing
            }}>
                {this.props.children}
            </ThingContext.Provider>
        )
    }
}

export default ThingProvider

export const withThings = C => props => (
    <ThingContext.Consumer>
        {(value) => <C {...value} {...props} />}
    </ThingContext.Consumer>
)