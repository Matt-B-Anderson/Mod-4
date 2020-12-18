import React from "react"

function Uglies(props) {
    const { post } = props;
    return (
        <div className='uglies'>
            <h2 className='title'>{post.title}</h2>
            <p className='description'>{post.description}</p>
            <div className='uglies-image' style={{ backgroundImage: `url(${post.imgUrl})` }}>
            </div>
        </div>
    )
}

export default Uglies