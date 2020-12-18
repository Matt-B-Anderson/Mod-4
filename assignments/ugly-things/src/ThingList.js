import React from 'react'
import Thing from './Thing'

const ThingList = props => {

    const mappedThings = props.things.map((thing) =>
        <Thing
            {...thing}
            deleteThing={props.deleteThing}
            editThing={props.editThing}
            key={thing._id}
        />)

    return (
        <div>
            {mappedThings}
        </div>
    )
}

export default ThingList