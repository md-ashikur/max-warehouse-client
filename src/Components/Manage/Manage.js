import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import ItemCard from '../ItemCard/ItemCard';

const Manage = () => {
    return (
        <div>
            <h1 className='mt-5 text-center'>Manage Inventory</h1>

            <ItemCard></ItemCard>
            <div className='mx-auto text-center my-5'>
                    <Link to="/addItem"><button className='manage-btn'>add new item</button></Link>
                </div>
        </div>
    );
};

export default Manage;