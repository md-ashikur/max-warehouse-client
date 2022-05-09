import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './item.css';


const Item = ({ item }) => {
    const { _id, name, img, description, price, supplier } = item;
    const navigate = useNavigate();

    const navigateToItem = id => {
        navigate(`/item/${id}`);
    }
    return (
        <div >

            <Row xs={2} md={2} className="g-4 my-4 d-flex card">

                <Col>
                    <Card>

                        <Card.Body>
                            <Card.Title> <h3>Brand: {name}</h3></Card.Title>
                            <Card.Text>


                                <p> {description}</p>
                                <br></br>
                                <b>Price: {price}</b>
                                <h4>Supplier: {supplier}</h4>

                                <button className='manage-btn'>UPDATE</button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col><Card.Img variant="top" src={img} /></Col>
            </Row>






        </div>
    );
};

export default Item;