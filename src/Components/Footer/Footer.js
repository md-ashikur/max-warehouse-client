import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-bg footer-text'>
            <Container >
                <Row xs={1} md={3} className='py-5'>
                    <Col className=' text-left'>
                    <h4>MAX WAREHOUSE</h4>
                    <div className='f-line'></div>
                    <p className='text-left'>By subscribing to our company newsletter you will always be up-to-date on our latest promotions, deals and vehicle inventory!</p>
                    </Col>


                    <Col>
                    <h4>FEATURED VEHICLES</h4>
                    <Row className='my-3'>
                        <Col className='f-img'>
                        <img src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" className='w-100'/>
                        </Col>
                        <Col className='f-img'>
                        <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60s" alt="" className='w-100'/>
                        </Col>
                        <Col className='f-img'>
                        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-100'/>
                        </Col>
                    </Row>
                    <Row>
                    <Col className='f-img'>
                        <img src="https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className='w-100'/>
                        </Col>
                        <Col className='f-img'>
                        <img src="https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNhcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className='w-100'/>
                        </Col>
                        <Col className='f-img'>
                        <img src="https://images.unsplash.com/photo-1494697536454-6f39e2cc972d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-100'/>
                        </Col>
                    </Row>
                    
                    </Col>

                    <Col>
                    <h4>CONTACT US</h4>
                    <p><b>Address:</b> 1234 Street Name, City</p>
                    <p><b>Phone:</b> 1-800-123-4567</p>
                    <p><b>Email:</b> sales@company.com</p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col><h5>MAX WAREHOUSE</h5></Col>
                    <Col><p className='text-center'>All copyright © reserved by Ashik</p></Col>
                   
                </Row>
            </Container>
        </div>
    );
};

export default Footer;