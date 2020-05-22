import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {appTitle} from '../Constants';



class AppNavbar extends Component {
    render() {
        return (

            <React.Fragment>
                <div className="sticky-top">
                    <nav className="navbar navbar-light bg-accent text-white">
                        <button className="navbar-toggler text-white border-0" type="button" data-toggle="collapse" data-target="#parentNavbar" aria-controls="parentNavbar" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars"></i>
                        </button>
                        <span className="navbar-brand text-white">
                            {appTitle}
                        </span>
                    </nav>
                    <div className="collapse" id="parentNavbar">
                        <div className="bg-accent p-3">
                            <ul className="list-group list-group-flush p-0">
                                <li className="list-group-item p-2  list-hover">
                                    <Link to="/" className="text-white h5 text-decoration-none"><i className="fa fa-home"></i>{" "} Dashboard</Link>
                                </li>
                                <li className="list-group-item p-2 list-hover">
                                    <Link to="/" className="text-white h5 text-decoration-none"><i className="fa fa-shopping-cart"></i>{" "} Cart</Link>
                                </li>
                        
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AppNavbar;
