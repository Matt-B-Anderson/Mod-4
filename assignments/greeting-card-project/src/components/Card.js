import React from 'react'
import { ThemeContextConsumer } from './ThemeProvider'

const Card = (props) => {
    const { img, recipient, message, sender } = props

    return (
        <ThemeContextConsumer>
            {context => (
                <section className='card-wrapper' id={`${context.theme}-theme`}>
                    <div className='img-holder' style={{ backgroundImage: `url(${img})` }}></div>
                    <div className={`${context.theme}-theme`}>
                        <h3 className='recipient'>To: {recipient}</h3>
                        <p>{message}</p>
                        <h3 className='sender'>From: {sender}</h3>
                    </div>
                    <div className='btn-holder'>
                        <button onClick={context.toggleTheme} className={`${context.theme}-theme-button`}>Change Card Theme</button>
                    </div>
                </section>

            )}
        </ThemeContextConsumer>
    )

}

export default Card