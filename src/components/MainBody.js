import React, { Component } from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'

export class MainBody extends Component {
    render() {
        return (
            <div style={styles}>
                <h1>FRONTEND WEBDESIGNER</h1>
                <h4>We create awesome websites for you</h4>
                <ButtonToolbar>
                    <Button variant='secondary'>Contact me</Button>
                </ButtonToolbar>
            </div>
        )
    }
}

const styles = {
    textAlign: 'left',
    paddingTop: '11%',
    paddingLeft: '2%',
    paddingBottom: '8%',
    fontFamilly: 'Muli',
    backgroundColor: '#352F3B',
    color:'lightGray'
}
export default MainBody
