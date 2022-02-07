import React from 'react'
import Myparagraph from './Myparagraph'

const DemoOutput = (props) => {
    console.log('demo running')
    return <Myparagraph>{props.show ? 'This is New!' : ''}</Myparagraph>
}

export default React.memo(DemoOutput)