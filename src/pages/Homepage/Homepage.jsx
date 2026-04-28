import React from 'react';
import Banner from '../../components/Shared/NavBar/Homepage/Banner/Banner';
import AllBooks from '../../components/Shared/NavBar/Homepage/AllBooks/AllBooks';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <AllBooks></AllBooks>
        </div>
    );
};

export default Homepage;