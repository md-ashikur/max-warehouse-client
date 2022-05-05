import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div className='bg-pic'>
                <img src="https://images.unsplash.com/photo-1471479917193-f00955256257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" alt="" className='w-100'/>
                </div>
            

            {/* ==============
           email pass login option
           ===============================  */}
           <div  className='form-body mx-auto my-5'>
           <h1>LOGIN</h1>
           <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-75 mx-auto my-3">
                <input {...register("email", { required: true })} className="form-input" placeholder="email" />
                {errors.email?.type === 'required' && "Email is required"}

                <input type="password" {...register("password", { required: true })} placeholder="password" className="form-input my-2" />
                {errors.password?.type === 'required' && "password is required"}
                <input type="submit" value="Login" className='submit-btn mx-auto py-2 mt-2' />
            </form>
            <p>Don't have any account? <Link to="/signup" className='toggle-link'>Sign Up</Link></p>
            {/* ==============
           or
           ===============================  */}
            <div className='d-flex px-5 or-div'>
                <div className='or-line'></div>
                <p className='or'>or</p>
                <div className='or-line'></div>
            </div>

           {/* ==============
           other login option
           ===============================  */}
            <div className="d-flex flex-column w-50 mx-auto ">
                <button className='other-login-btn my-2 py-2'>
                    <img src="http://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png" alt="" /> Google
                </button>
                <button className='other-login-btn py-2'>
                    <img src="https://toppng.com/uploads/preview/facebook-logo-transparent-11549681696nullxylgyy.png" alt="" /> Facebook
                </button>
            </div>
           </div>
        </div>
    );
};

export default Login;