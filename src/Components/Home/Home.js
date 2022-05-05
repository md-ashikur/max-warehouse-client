import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Carousel.Caption className='mb-5 carousel-title'>
                        <h1 className='mb-5'><b>REALITY</b> is just your <b>PERCEPTION</b></h1>
                        <p>Attract, Engage, 7 convert<br></br> more<br></br> qualified vehicle shoppers</p>
                    </Carousel.Caption>
            <Carousel>
            
                <Carousel.Item className='carousel-img' interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item className='carousel-img' interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1597353946119-888dbb405217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="Second slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item className='carousel-img'>
                    <img
                        className="d-block  w-100"
                        src="https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80"
                        alt="Third slide"
                    />
                   
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;