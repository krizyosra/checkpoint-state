import { render } from '@testing-library/react'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class info extends React.Component{

    componentDidMount(){
        setInterval(() => {
         this.setState({count:this.props.state.count+1})
        }, 1000);
      }
   render(){
    
  return (
    <>
         <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{this.props.state.Person.fullName}</Card.Title>
      <Card.Text>
      {this.props.state.Person.bio}
      {this.props.state.count}
      {this.props.state.Person.profession}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card> 
    </>
  )
}
}

export default info
