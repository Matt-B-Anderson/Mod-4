import React from "react"
import { DataContextConsumer } from "./dataProvider"

function Form(props) {
    return (
        <DataContextConsumer>
            {context => (
                <form onSubmit={context.handleSubmit}>
                    <div className='form-container'>
                        <input
                            className='title'
                            name='title'
                            onChange={context.handleChange}
                            value={context.post.title}
                            placeholder='Title'
                            minLength='3'
                            required
                        />

                        <br />

                        <input
                            className='image'
                            name='imgUrl'
                            onChange={context.handleChange}
                            value={context.post.imgUrl}
                            placeholder='Image URL'
                            minLength='3'
                            required
                        />

                        <br />

                        <input
                            className='description'
                            name='description'
                            onChange={context.handleChange}
                            value={context.post.description}
                            placeholder='Description'
                            minLength='3'
                            required
                        />

                        <br />

                        <button>Submit</button>
                    </div>
                </form>
            )}
        </DataContextConsumer>
    )
}

export default Form