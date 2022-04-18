import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {

    const [agree, setAgree] = useState(false);

    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigateLogin = () => {
        navigate('/login');
    };

    if (user) {
        console.log('user', user);
    }

    if (loading || updating) {
        return <Loading></Loading>;
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    };
    return (
        <div className='container'>
            <h2 className='title'>Please Register</h2>
            <form onSubmit={handleRegister} className='register-form'>
                <input type="text" name="name" placeholder='your name' id="text" />
                <input type="email" name="email" placeholder='Email Address' required id="email" />
                <input type="password" name="password" placeholder='Password' required id="password" />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Condition</label>
                <input
                    disabled={!agree}
                    className='w-100 mx-auto btn btn-primary mt-2' type="submit"
                    value="Register" />
            </form>
            <p className='text-center'>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please login</Link> </p>
            <SocialLogin />
        </div>
    );
};

export default Register;
