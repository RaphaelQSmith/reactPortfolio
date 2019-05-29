import React, { Component } from 'react'

export class MainBody extends Component {
    render() {
        return (
            <div style={styles}>
                <h1>FRONTEND WEBDESIGNER</h1>
                <h4>We create awesome websites for you</h4>
            </div>
        )
    }
}

const styles = {
    textAlign: 'center',
    paddingTop: '11%',
    paddingBottom: '8%',
    fontFamilly: 'Muli',
    backgroundColor: '#352F3B',
    color:'lightGray'
}
export default MainBody
