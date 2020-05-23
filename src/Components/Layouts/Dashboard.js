import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import AllProducts from "../Products/AllProducts";
import {appTitle} from '../Constants';


class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <div className="jumbotron bg-accent rounded-0 card border-0 rounded-0 text-center">
                        <div className="row">
                            <div className="col-sm-6 mx-auto">
                                <p className="text-white header-font title-font">
                                    Get the latest fashion and perfect
                                    sizes for you right here at {appTitle}.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <AllProducts/>
                </div>
            </div>
        )
    }
}


export default Dashboard;