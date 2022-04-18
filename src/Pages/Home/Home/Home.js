import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>About - Genius Car Service</title>
            </Helmet>
            <Banner />
            <Services />
            <Experts />
        </>
    );
};

export default Home;