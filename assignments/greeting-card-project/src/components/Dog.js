import React, { useState } from "react"
import axios from 'axios'
import Card from './Card'

const Dog = (props) => {
    const { handleChange, recipient, message, sender } = props

    const [imgData, setImgData] = useState({ img: '' })
    const [dogCardsData, setDogCardsData] = useState([])

    function handleSubmit(event) {
        event.preventDefault()

        axios.get('https://random.dog/woof.json')
            .then(res => {
                setImgData({ img: res.data.url })
            })
            .catch(err => console.log(err))

        setDogCardsData([dogCardsData])
    }

    const mappedCards = dogCardsData.map((card) =>
        <Card
            img={imgData.img}
            recipient={recipient}
            message={message}
            sender={sender}
            {...card}
            key={performance.now()}
        />)

    return (
        <div className='content'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="recipient"
                    value={recipient}
                    onChange={handleChange}
                    placeholder="To" />
                <input
                    type="text"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    placeholder="Message" />
                <input
                    type="text"
                    name="sender"
                    value={sender}
                    onChange={handleChange}
                    placeholder="Sender" />
                <button>Generate Postcard</button>
            </form>
            <>
                {mappedCards}

            </>

        </div>
    )
}

export default Dog