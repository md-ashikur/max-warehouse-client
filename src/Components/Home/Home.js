import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import ItemCard from '../ItemCard/ItemCard';
import Loading from '../Loading/Loading';
import './Home.css';

const Home = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
        <div>


            <Carousel.Caption className='mb-5 carousel-title'>
                <h1 className='mb-5'><b>REALITY</b> is just your <b>PERCEPTION</b></h1>
                <p>Attract, Engage, convert<br></br> more qualified vehicle shoppers</p>
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
                        src="https://images.unsplash.com/photo-1490641815614-b45106d6dd04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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


            {/* =========================== */}
            <Container className='my-5'>
                <h2 className='text-center'>Inventory Items</h2>
                <CardGroup >
                    {
                        items.slice(0, 6).map(item => <Item
                            key={item._id}
                            item={item}
                        >
                        </Item>)
                    }
                </CardGroup>
            </Container>
            <div className='mx-auto text-center my-5'>
                <Link to="/manage"><button className='manage-btn'>Manage Inventories</button></Link>
            </div>


        </div>
    );
};

export default Home;