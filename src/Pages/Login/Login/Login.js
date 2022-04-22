import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate('');
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }
    let errorElement;
    let loadingElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>;
    }
    if (loading || sending) {
        return <Loading></Loading>;
    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };

    const navigateRegister = () => {
        navigate('/register');
    };

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('please enter your email address');
        }
    };

    return (
        <div className='container mx-auto'>
            <PageTitle title="Login" />
            <div className="w-50 mx-auto">
                <h2 className='text-primary text-center mt-3'>Please Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} required type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary w-100 mx-auto d-block mb-2" type="submit">
                        Login
                    </Button>
                </Form>
                {errorElement}
                {loadingElement}
                <p>New to Genius Car? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
                <p>Forget Password? <button className=' btn btn-link text-decoration-none' onClick={resetPassword}>Reset Password</button></p>

            </div>
            <SocialLogin />
            <ToastContainer />
        </div>
    );
};

export default Login;