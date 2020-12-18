import React from "react"
import Uglies from './Uglies'
import { DataContextConsumer } from "./dataProvider"

function UgliesList() {
    return (
        <DataContextConsumer>
            {context => (
                context.uglies.map((post, index) => {
                    return <span>
                        <Uglies post={post} key={post.id} />
                        <span className='button-wrapper'>
                            <button className='edit' onClick={() => context.edit(post, index)}>Edit</button>
                            <button className='delete' onClick={() => context.delete(post.id)}>Delete</button>
                        </span>
                    </span>
                })
            )}
        </DataContextConsumer >
    )
}

export default UgliesList