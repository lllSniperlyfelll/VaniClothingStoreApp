import React, { Component } from 'react'
import firstImage from "../../SampleImages/1.jpg";
import classnames from 'classnames';


export default class ProductDetails extends Component {

    constructor(props){
        super(props);
        this.state={
            itemSize: 'M'
        }
        this.updateItemSize = this.updateItemSize.bind(this);
    }


    updateItemSize = (size) => {
        this.setState({
            itemSize: size
        })
        console.log(this.state);
    }

    render() {

        const {itemSize} = this.state;
        return (
            <div className="container-fluid mt-3">
                <div className="jumbotron bg-transparent">
                    <div className="row align-middle">
                        <div className="col-md-6" >
                            <div className="w3-card-4 rounded">
                                <img src={firstImage}  className="card-img w3-card"/>
                                <div className="jumbotron bg-transparent pb-0">
                                    <button className="btn btn-accent text-white btn-block ">
                                        <span className="content-font"><i className="fa fa-shopping-cart"/> Add to cart</span>
                                    </button>
                                </div>

                                <div className="jumbotron bg-transparent pt-1 pb-4">
                                    <button className="btn btn-accent text-white btn-block">
                                        <span className="content-font"><i className="fa fa-money"/> Buy now</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 mx-auto">
                            <div className="w3-card rounded">
                                    <label className="header-font text-darken-2 p-2">
                                        Mens Wear
                                    </label>
                                    <hr/>
                                
                                <ul className="list-group">
                                    <li className="list-group-item text-muted content-font border-0">
                                        <div className="row">
                                            <div className="col-sm mx-auto">
                                                Select size: 
                                            </div>
                                        </div>
                                        <div className="row mt-1">
                                            <div className="col-2 mr-3">
                                                    
                                                    <button className={classnames({
                                                        'text-muted grey lighten-4': (itemSize !== "XS"),
                                                        'bg-primary text-white font-weight-bold': (itemSize === "XS"),
                                                        },"btn w3-circle ")} onClick={() => this.updateItemSize("XS")}>
                                                            
                                                        XS
                                                    </button> 
                                            </div>
                                            <div className="col-2">    
                                                            <button className={classnames({
                                                                    'text-muted grey lighten-4': (itemSize !== "S"),
                                                                    'bg-primary text-white font-weight-bold': (itemSize === "S"),
                                                                    },"btn w3-circle ")} onClick={() => this.updateItemSize("S")}>
                                                                    
                                                                    S
                                                            </button>
                                            </div>
                                            <div className="col-2">
                                            
                                                            <button className={classnames({
                                                                    'text-muted grey lighten-4': (itemSize !== "M"),
                                                                    'bg-primary text-white font-weight-bold': (itemSize === "M"),
                                                                    },"btn w3-circle ")} onClick={() => this.updateItemSize("M")}>
                                                                    
                                                                    M
                                                            </button>
                                            </div>
                                            <div className="col-2">
                                                            <button className={classnames({
                                                                    'text-muted grey lighten-4': (itemSize !== "L"),
                                                                    'bg-primary text-white font-weight-bold': (itemSize === "L"),
                                                                    },"btn w3-circle ")} onClick={() => this.updateItemSize("L")}>
                                                                    
                                                                    L
                                                            </button>
                                            </div>
                                            <div className="col-2">
                                                            <button className={classnames({
                                                                    'text-muted grey lighten-4': (itemSize !== "XL"),
                                                                    'bg-primary text-white font-weight-bold': (itemSize === "XL"),
                                                                    },"btn w3-circle ")} onClick={() => this.updateItemSize("XL")}>
                                                                    
                                                                    XL
                                                            </button>
                                            </div>        
                                        </div>
                                    </li>
                                    <li>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        )
    }
}
