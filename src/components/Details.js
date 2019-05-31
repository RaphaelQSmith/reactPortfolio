import React, { Component } from 'react'

export class Details extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <div className='row' style={styles}>  
                        <div className='col'>  
                            <h3>Modern desing helps your sales</h3>
                            <p>
                                The job of a frontend developer is to design a modern, cool loking and easy-to-use website and applications. 
                            </p>
                            <p>
                                I'm specialized on create fun looking and also responsive websites to provide the clients with 
                            </p>
                        </div>
                    </div>
                    <div className='row' style={lightStyles}>
                        <div className='col'>
                        <h3>Title of this section</h3>
                        <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    textAlign: 'center',
    textFamily: 'Muli',
    paddingTop: '4%',
    paddingBottom: '4%',
    backgroundColor: '#343A40',
    color: 'white'
}
const lightStyles = {
    textAlign: 'center',
    textFamily: 'Muli',
    paddingTop: '4%',
    paddingBottom: '4%'
}

export default Details
