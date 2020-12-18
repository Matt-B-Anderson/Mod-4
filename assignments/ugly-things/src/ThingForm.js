import React from 'react'

const ThingForm = (props) => {
    const { handleSubmit, handleChange, title, description, imgUrl, btnText } = props

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Title" />
            <input
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Description" />
            <input
                type="text"
                name="imgUrl"
                value={imgUrl}
                onChange={handleChange}
                placeholder="Image URL" />
            <button>{btnText}</button>
        </form>
    )
}

export default ThingForm