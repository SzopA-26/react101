import React from 'react'

const Btn = (props) => {
    let name = (props.name === undefined) ? 'Click Me' : props.name

    return (
        <button onClick={props.click}>{name}</button>
    )
}

export default Btn