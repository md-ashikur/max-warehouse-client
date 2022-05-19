import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './item.css';


const Item = ({ item }) => {
    const { id: _id, name, img, description, price, supplier } = item;
    const navigate = useNavigate();

    const navigateToItem = id => {
        navigate(`/item/${id}`);
    }
    return (
        <div >

            
            <Card.Img variant="top" src={img} height="260px"/>
                
                    <Card>

                        <Card.Body>
                            <Card.Title> <h5>Brand: {name}</h5></Card.Title>
                            <Card.Text>


                                <p> {description}</p>
                                <br></br>
                                <b>Price: {price}</b>
                                <h5>Supplier: {supplier}</h5>

                                <button className='manage-btn' onClick={() => navigateToItem(_id)}>UPDATE</button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
               

               
         






        </div>
    );
};

export default Item;