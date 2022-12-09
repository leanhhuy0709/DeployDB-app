import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useState} from 'react';

function FoodList({foods, filter}) {  
    
    foods = foods.filter((item) => item.Fname.includes(filter) || item.F_id.toString() == filter);

  return React.createElement('div', null,(<h1 style = {{textAlign: 'center'}}>FOOD LIST</h1>) ,foods.map((item, idx) => (
    <Card key = {idx} className = 'm-3 p-1' style={{ width: '18rem', display: 'inline-block' }}>
    <Card.Img variant="top" style = {{height: '11rem'}} src={item.PictureURL} />
    <Card.Body>
        <Card.Title>{item.Fname}</Card.Title>
        <Card.Text>
            {item.Description}
        </Card.Text>
        <Card.Text className = "text-center">{item.Unit_price.toString()}</Card.Text>
        <div className = "text-center"><Button variant="primary">Add to cart</Button></div>
    </Card.Body>
    </Card>
)));
}

export default FoodList;