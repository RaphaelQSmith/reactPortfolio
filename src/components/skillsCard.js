import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import htmlLogo from './img/htmlLogoSmall.png'
import cssLogo from './img/cssLogo.jpeg'
import jsLogo from './img/jsLogo.png'
import reactLogo from './img/reactLogo.png'

export class SkillsCard extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                <Card style={styles} className='col' >
                    <Card.Img  top src={htmlLogo} />
                    <Card.Title>HTML 5</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                </Card> 
                <Card style={styles} className='col'>
                    <Card.Img top src={cssLogo} />
                    <Card.Title>CSS</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                </Card> 
                <Card style={styles} className='col'>
                    <Card.Img top src={jsLogo} />
                    <Card.Title>JAVASCRIPT</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                </Card> 
                <Card style={styles} className='col'>
                    <Card.Img top src={reactLogo} />
                    <Card.Title>REACT</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                </Card>
                </div>
            </div>
        )
    }
}
const styles={
    margin: '1%',
    padding: '1%'
}

export default SkillsCard
