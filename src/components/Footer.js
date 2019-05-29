import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer bg='dark' style={styles}>
                    <p>
                       2019 @ Designed by Raphael Smith
                    </p> 
                </footer>    
            </div>
        )
    }
}

const styles = {
    color : 'lightGray',
    textAlign: 'center',
    backgroundColor: '#343A40',
    padding: '0.4%',
    fontFamilly: 'Muli'
}
export default Footer
