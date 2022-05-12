import React, { useEffect, useState } from 'react';
import { Container} from 'react-bootstrap';
import Item from '../Item/Item';
import "./ItemCard.css";

const ItemCard = () => {

    const [ items, setItems] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/item')
        .then(res => res.json())
        .then(data => setItems(data));
    }, [])


    return (
        <div >
            <Container className='my-5'>
            
               
               
                {
                // items.map(item => <Item
                //     key={item._id}
                //     item={item}
                // >
                // </Item>)
            }
                
             
            </Container>
        </div>
    );
};

export default ItemCard;