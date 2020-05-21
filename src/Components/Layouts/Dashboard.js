import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import dashboardImg from './dashboard_img.jpg';


class Dashboard extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <div className="">
                    <div className="jumbotron-fluid bg-trasnparent rounded-0 card border-0 rounded-0">
                        <img src={dashboardImg} className="card-img-top w3-grayscale" id="dashimg" />
                    </div>
                </div>
            </div>
        )
    }
}


export default Dashboard;