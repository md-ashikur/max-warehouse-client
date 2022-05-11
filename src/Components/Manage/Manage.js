import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';


const Manage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    
    return (
        <div>
            <h1 className='mt-5 text-center'>Manage Inventory</h1>
            <CardGroup>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    >
                    </Item>)
                }
            </CardGroup>
            <div className='mx-auto text-center my-5'>
                <Link to="/addItem"><button className='manage-btn'>add new item</button></Link>
            </div>
        </div>
    );
};

export default Manage;