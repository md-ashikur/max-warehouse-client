import React from 'react';
import { useForm } from "react-hook-form"; 
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='form-body w-50  mx-auto '>
            <h1>SIGN UP</h1>

            {/* ==============
           email pass login option
           ===============================  */}
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-50 mx-auto my-3">
                <input {...register("email", { required: true })} className="form-input" placeholder="email" />
                {errors.email?.type === 'required' && "Email is required"}

                <input type="password" {...register("password", { required: true })} placeholder="password" className="form-input my-2" />
                {errors.password?.type === 'required' && "password is required"}
                <input type="submit" value="Login" className='submit-btn mx-auto py-2 mt-2' />
            </form>
            <p>Already have an account? <Link to="/login" className='toggle-link'>Login</Link></p>
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
    );
};

export default Signup;