import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);


    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        };
        axios.post('https://protected-sierra-20339.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('your order is booked!!!');
                    event.target.reset();
                }
            });
    };

    // const [user, setUser] = useState({
    //     name: 'Akbar The Grate',
    //     email: 'akbar@momo.taj',
    //     address: 'Tajmohol Road Md.pur',
    //     phone: '0171111111'
    // });

    // const handleAddressChange = event => {
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     setUser(newUser);
    // };

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service?.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' readOnly disabled value={user?.displayName} type="text" name='name' placeholder='name' required />
                <br />
                <input className='w-100 mb-2' readOnly disabled value={user?.email} type="email" name='email' placeholder='email' required />
                <br />
                <input className='w-100 mb-2' value={service?.name} readOnly disabled type="text" name='service' placeholder='service' required />
                <br />
                <input className='w-100 mb-2' type="text" name='address' autoComplete='off' placeholder='address' required />
                <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;