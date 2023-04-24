import React from 'react'
import { Card,Button, } from 'react-bootstrap';
import './productcard.css';

const ProductCard = ({image,title,price}) => {
  return (
    <div className='carditem'>
    <Card style={{ width: '15rem'}}>
      <Card.Img variant="top" src={image} className='img'/>
      <Card.Body className='body'>
        <Card.Title className='card-title'>{title}</Card.Title>
        <Card.Text>₹ {price}</Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProductCard