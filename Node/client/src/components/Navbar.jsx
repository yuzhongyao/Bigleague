import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
        <nav className="navbar navbar-deafult">
            <div className="container-fluid">
                <div>
                    <Link to="/Teams" className='me-5 display-5 text-decoration-none'>Teams</Link>
                    <Link to="/Players" className='me-5 display-5 text-decoration-none'>Players</Link>
                    <Link to="/Info" className='me-5 display-5 text-decoration-none'>Info</Link>
                </div>
            </div>
        </nav>

        </div>

    );

};

export default Navbar;