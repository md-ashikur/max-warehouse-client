import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Signup = () => {
    
   

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        ,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, user1, loading1] = useSignInWithGoogle(auth);
   
    if (loading || loading1) {
        <Loading></Loading>
    }

    if (user || user1) {
        navigate('/');
    }

    const handleSignUp = event => {
        event.preventDefault();
        if(password !== confirm){
            setError('Your two passwords did not match');
            return;
        }
        if(password.length <6){
            setError('Password must be 6 characters or longer');
            return;
        }
    }

    return (
        <div>
            <div className='bg-pic'>
                <img src="https://images.unsplash.com/photo-1530940031329-f884cdcf65c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className='w-100' /></div>


            {/* ==============
           email pass option
           ===============================  */}
            <div className='form-body mx-auto my-5'>
                <h1>SIGN UP</h1>
                <form onSubmit={handleSignUp} className="d-flex flex-column w-75 mx-auto my-3">
                    <input onBlur={(e) => setName(e.target.value)}  type="text" name='name' className="form-input my-2" placeholder="Enter Full Name" required/>
                    

                    <input onBlur={(e) => setEmail(e.target.value)} type="email" name='email' className="form-input" placeholder="email" required/>
                    

                    <input onBlur={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="password" className="form-input my-2" />
                    

                    <input onBlur={(e) => setConfirm(e.target.value)} type="password" name="confirm-password" placeholder="confirm password" className="form-input mb-2" />
                    <p style={{color: 'red'}}>{error}</p>

                    <input  onClick={() => createUserWithEmailAndPassword(email, password, name)} type="submit" value="Sign Up" className='submit-btn mx-auto py-2 mt-2' />
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
                    <button className='other-login-btn my-2 py-2' onClick={() => signInWithGoogle()} type="submit">
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

export default Signup;