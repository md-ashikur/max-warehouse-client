import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

import "./Login.css";


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // google--------------
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // email password-----------
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useSignInWithEmailAndPassword(auth);


    if (user || user1) {
        navigate(from, { replace: true });
    }
    if (loading || loading1) {
        <Loading></Loading>
    }


    const handleSubmit = event => {
        event.preventDefault();
        
    }
  
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
           <form onSubmit={handleSubmit} className="d-flex flex-column w-75 mx-auto my-3">
                <input onBlur={(e) => setEmail(e.target.value)} type="email" name="email" className="form-input" placeholder="email" required/>
                

                <input
                onBlur={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="password" className="form-input my-2" required/>

                 <p style={{color: 'red'}}>{error?.message}</p> 

                <input type="submit" value="Login" onClick={() => signInWithEmailAndPassword(email, password)}className='submit-btn mx-auto py-2 mt-2' />
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
                <button className='other-login-btn my-2 py-2' onClick={() => signInWithGoogle()}>
                    <img src="http://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png" alt=""  /> Google
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