import React from 'react'

const Myparagraph = (props) => {
    console.log('paragraph running')
    return <p>{props.children}</p>
}

export default Myparagraph