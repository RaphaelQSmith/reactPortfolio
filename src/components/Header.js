import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

export class Header extends Component {
    render() {
        return (
            
                <Navbar style={styles} fixed="top">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse  className="justify-content-end">
                    <Navbar.Text style={fontStyles}>
                        Raphael Smith
                    </Navbar.Text>
                </Navbar.Collapse>
                </Navbar>
        )
    }
}

const styles = {
    backgroundColor: '#2B272F'
}
const fontStyles = {
    color : 'lightGray',
    fontFamilly: 'Muli',
    fontWeight: 'bold',
    fontSize: '1.2em'
}

export default Header
