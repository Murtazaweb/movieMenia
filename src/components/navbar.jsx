import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">MovieTrackerApp</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Top Movies</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/onlymovie" className="nav-link">SearchMovie</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;