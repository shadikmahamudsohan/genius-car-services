import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Checkout = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <h2>Please Checkout your booking</h2>
        </div>
    );
};

export default Checkout;