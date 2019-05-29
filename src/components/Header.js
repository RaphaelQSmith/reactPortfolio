import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

export class Header extends Component {
    render() {
        return (
            
                <Navbar style={styles} fixed="top">
                <Navbar.Brand href="#home" style={fontStyles}>Raphael Smith - Portfolio</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                
                    </Navbar.Text>
                </Navbar.Collapse>
                </Navbar>
        )
    }
}

const styles = {
    fontFamilly: 'Muli',
    fontWeight: 'bold',
    backgroundColor: '#2B272F'
}
const fontStyles = {
    color : 'lightGray'
}

export default Header
