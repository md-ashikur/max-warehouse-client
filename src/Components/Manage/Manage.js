import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import "./Manage.css";

const Manage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://agile-caverns-36343.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    
    return (
        <div className="container">
            <h1 className='mt-5 text-center'>Manage Inventory</h1>
            <div className="card-group">
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    >
                    </Item>)
                }
            </div>
            <div className='mx-auto text-center my-5'>
                <Link to="/addItem"><button className='manage-btn'>add new item</button></Link>
            </div>
        </div>
    );
};

export default Manage;