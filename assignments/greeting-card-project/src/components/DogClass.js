import React, { Component } from "react"
import axios from 'axios'
import Card from './Card'

class DogClass extends Component {
    constructor() {
        super()
        this.state = {
            card: {
                recipient: '',
                message: '',
                sender: '',
            },
            dogCards: [],
            img: []
        }
    }

    componentDidMount() {
        axios.get('https://random.dog/woof.json')
            .then(res => {
                this.setState({
                    img: res.data.url
                })
            })
            .catch(err => console.log(err))
    }

    handleChange = (event) => {
        console.log('worked')
        const { name, value } = event.target
        const card = this.state.card
        card[name] = value
        this.setState({ card })
    }

    setImage = () => {
        this.setState(prevState => {
            const image = this.getImage()
            const card = { ...prevState.card, image }
            return { card }
        })
    }

    getImage = () => {
        const index = Math.floor(Math.random() * Math.floor(this.state.img.length));
        return this.state.img[index]
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState(prevState => {
            const card = prevState.card
            return {
                dogCards: [...prevState.dogCards, card]
            }
        })

    }

    render() {
        return (<div className='content' >
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="recipient"
                    value={this.state.card.recipient}
                    onChange={this.handleChange}
                    placeholder="To" />
                <input
                    type="text"
                    name="message"
                    value={this.state.card.message}
                    onChange={this.handleChange}
                    placeholder="Message" />
                <input
                    type="text"
                    name="sender"
                    value={this.state.card.sender}
                    onChange={this.handleChange}
                    placeholder="Sender" />
                <button>Generate Postcard</button>
            </form>
            <>
                { this.state.dogCards.map(card => {
                    return <span key={performance.now}>
                        <Card
                            img={this.state.img}
                            card={card}
                        />
                    </span>
                })}
            </>
        </div>
        )
    }

}

export default DogClass