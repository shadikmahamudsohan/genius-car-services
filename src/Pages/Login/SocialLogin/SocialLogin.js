import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    let loadingText;
    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    };
    const handleSignInWithGithub = () => {
        signInWithGithub();
    };
    if (error || error1) {

        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>;

    }
    if (loading || loading1) {
        return <Loading></Loading>;
    }

    let from = location.state?.from?.pathname || '/';
    if (user || user1) {
        navigate(from, { replace: true });
    }
    return (
        <div className='w-50 mx-auto'>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
            </div>
            {errorElement}
            {loadingText}
            <div>
                <button onClick={handleSignInWithGoogle} className='btn btn-info w-100 d-block mx-auto my-2'>
                    <img src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-primary w-100 d-block mx-auto my-2'>
                    <img className='bg-white' src={facebook} style={{ width: '30px' }} alt="" />
                    <span className='px-2'>FaceBook Sign In</span>
                </button>
                <button onClick={handleSignInWithGithub} className='btn btn-dark w-100 d-block mx-auto my-2'>
                    <img src={github} style={{ width: '30px' }} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;