import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className='container mb-5'>
            <Link to="/" className='font-weight-light display-1 text-center mb-5 text-decoration-none'>Big League</Link>
        </div>

    );

};

export default Header;