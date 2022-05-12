import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{ 
        
        console.log(data);
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
        })
    };
    return (
        <div className='mx-auto'>
            <div className='bg-pic'>
                <img src="https://images.unsplash.com/photo-1530940031329-f884cdcf65c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className='w-100' /></div>

            <div className='form-body mx-auto my-5'>
                <h1>Add Items</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-75 mx-auto my-3">
                    <input type="text"  {...register("name", { required: true })} className="form-input my-2" placeholder="Brand Name" />

                    <textarea type="text"  {...register("description", { required: true })} className="form-input my-2" placeholder="Description" />

                    <input type="number" {...register("price")} className="form-input my-2" placeholder="price" />

                    <input type="text"  {...register("supplier", { required: true })} className="form-input my-2" placeholder="Supplier Name" />

                    <input type="text"  {...register("img", { required: true })} className="form-input my-2" placeholder="Picture url" />
                   
                    
                    <input type="submit" value="Add" className='submit-btn mx-auto py-2 mt-2' />
                </form>
            </div>
        </div>
    );
};

export default AddItem;