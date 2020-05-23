import React, { Component } from 'react';
import firstImage from '../../SampleImages/1.jpg';
import secondImage from '../../SampleImages/2.jpg';
import thirdImage from '../../SampleImages/3.png';
import fourthImage from '../../SampleImages/4.png';
import {moreLink} from '../Constants';

import {Link} from 'react-router-dom';




class AllProducts extends Component {

    constructor(props){
        super(props);
        this.state = {
            priceRange:0
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick = (selfId, eleId) =>{
        console.log("Called on Click");
        
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-sm-3">
                        
                        <button className="btn btn-accent text-white" data-target="#choiceMenu" data-toggle="collapse">
                            <i className="fa fa-sort"/> {""}Reorder
                        </button>
                        <div className="collapse border-0 outline-0 pt-1" id="choiceMenu">
                            <div class="bg-transparent">
                                <ul className="list-group">

                                    <li className="list-group-item border-0">
                                        <button type="button" className="btn btn-accent btn-block text-white border-right-0" data-target="#filterMenu" data-toggle="collapse" >
                                            <i className="fa fa-filter"/> Filter
                                        </button>
                                        <div className="collapse w3-card mt-1" id="filterMenu">
                                           <ul className="list-group list-group-flush">
                                               <li className="list-group-item">

                                                <div class="dropdown">
                                                        <span type="button" class="btn p-0 btn-transparent w-100 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Price
                                                        </span>
                                                        <div class="dropdown-menu w3-card p-1">
                                                            <ul className="list-group list-group-flush text-center">
                                                                <li className="list-group-item">
                                                                    <span className="text-muted">
                                                                        100 - 200 &#x20B9;
                                                                    </span>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <span className="text-muted">
                                                                        201 - 300 &#x20B9;
                                                                    </span>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <span className="text-muted">
                                                                        301 - 400 &#x20B9;
                                                                    </span>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <span className="text-muted">
                                                                        400 & Above
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    
                                               </li>
                                               <li className="list-group-item">
                                                    <div class="dropdown">
                                                        <span type="button" class="btn p-0 btn-transparent w-100 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Type
                                                        </span>
                                                        <div class="dropdown-menu w3-card p-1">
                                                            <ul className="list-group list-group-flush text-justify">
                                                                <li className="list-group-item">
                                                                    <span className="text-muted">
                                                                        <i className="fa fa-female"/> Female
                                                                    </span>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <span className="text-muted">
                                                                    <i className="fa fa-male"/> Male
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                               </li>
                                           </ul>
                                        </div>
                                    </li>

                                    <li className="list-group-item border-0">
                                        <button type="button" className="btn btn-accent btn-block text-white border-right-0" data-target="#sortMenu" data-toggle="collapse" >
                                            <i className="fa fa-bars"/> Sort
                                        </button>
                                        <div className="collapse w3-card mt-1" id="sortMenu">
                                        <ul className="list-group list-group-flush">
                                               <li className="list-group-item">

                                                <div class="dropdown">
                                                        <span type="button" class="btn p-0 btn-transparent w-100 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Order
                                                        </span>
                                                        <div class="dropdown-menu w3-card p-1">
                                                            <ul className="list-group list-group-flush text-center">
                                                                <li className="list-group-item">
                                                                    <span className="text-muted">
                                                                        A-Z
                                                                    </span>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <span className="text-muted">
                                                                        Z-A
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    
                                               </li>
                                               <li className="list-group-item">
                                                    <div class="dropdown">
                                                        <span type="button" class="btn p-0 btn-transparent w-100 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Price
                                                        </span>
                                                        <div class="dropdown-menu w3-card p-1">
                                                            <ul className="list-group list-group-flush text-justify">
                                                                <li className="list-group-item">
                                                                    <span className="text-muted">
                                                                        <i className="fa fa-arrow-up"/> Lowest - Highest
                                                                    </span>
                                                                </li>
                                                                <li className="list-group-item">
                                                                    <span className="text-muted">
                                                                        <i className="fa fa-arrow-down"/> Highest - Lowest
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                               </li>
                                               <li className="list-group-item">
                                                    <div class="dropdown">
                                                        <span type="button" class="btn p-0 btn-transparent w-100">
                                                            <span className="text-accent"><i className="fa fa-certificate"/></span>  Latest
                                                        </span>
                                                    </div>
                                               </li>
                                           </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <hr/>


                <div className="row mb-5">
                    <div className="col-md-5 mx-auto">
                        <div className="jumbotron p-1 bg-transparent">
                            <div className="card bg-white border-0 w3-card standard-height">
                                <img src={firstImage} className="card-img-top" />
                                <div className="card-body bg-transparent">
                                    <label className="text-dark card-title-font">
                                        Mens Wear
                                    </label>
                                    <p className="lead content-font text-muted ">
                                        Description<br/>
                                        Clothing (also known as clothes, apparel and attire) is items worn on the body. Clothing is typically made of fabrics or textiles but over time has included garments made from animal skin or other thin sheets of materials put together. The wearing of clothing is mostly restricted to human beings and is a feature of all human societies. The amount and type of clothing worn depends on gender, body type, social, and geographic considerations.
                                        Clothing serves many purposes: it can serve as protection from the elements, rough surfaces, rash-causing plants, insect bites, splinters, thorns and prickles by providing a barrier between the skin and the environment. Clothes can insulate against cold or hot conditions, and they can provide a hygienic barrier, keeping infectious and toxic materials away from the body. Clothing also provides protection from ultraviolet radiation.
                                        Wearing clothes is also a social norm, and being deprived of clothing in front of others may be embarrassing. In most parts of the world, not wearing clothes in public so that genitals, breasts or buttocks are visible could be considered indecent exposure.
                                        

                                    </p>
                                </div>
                                <div className="card-footer bg-transparent border-0 p-0 text-right">
                                        {moreLink("na")}
                                </div>
                                 
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 mx-auto">
                        <div className="jumbotron p-1 bg-transparent">
                            <div className="card bg-white border-0 w3-card standard-height">
                                <img src={secondImage} className="card-img-top" alt=""/>
                                <div className="card-body bg-transparent">
                                    <label className="text-dark card-title-font">
                                        Womens Wear
                                    </label>
                                    <p className="lead content-font text-muted ">
                                        Description<br/>
                                        Clothing (also known as clothes, apparel and attire) is items worn on the body. Clothing is typically made of fabrics or textiles but over time has included garments made from animal skin or other thin sheets of materials put together. The wearing of clothing is mostly restricted to human beings and is a feature of all human societies. The amount and type of clothing worn depends on gender, body type, social, and geographic considerations.
                                        Clothing serves many purposes: it can serve as protection from the elements, rough surfaces, rash-causing plants, insect bites, splinters, thorns and prickles by providing a barrier between the skin and the environment. Clothes can insulate against cold or hot conditions, and they can provide a hygienic barrier, keeping infectious and toxic materials away from the body. Clothing also provides protection from ultraviolet radiation.
                                        Wearing clothes is also a social norm, and being deprived of clothing in front of others may be embarrassing. In most parts of the world, not wearing clothes in public so that genitals, breasts or buttocks are visible could be considered indecent exposure.
                                        

                                    </p>
                                </div>
                                <div className="card-footer bg-transparent border-0 p-0 text-right">
                                        {moreLink("na")}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>



                <div className="row mb-5">
                    <div className="col-md-5 mx-auto">
                        <div className="jumbotron p-1 bg-transparent">
                            <div className="card bg-white border-0 w3-card standard-height">
                                <img src={firstImage} className="card-img-top" alt=""/>
                                <div className="card-body bg-transparent">
                                    <label className="text-dark card-title-font">
                                        Mens Wear
                                    </label>
                                    <p className="lead content-font text-muted ">
                                        Description<br/>
                                        Clothing (also known as clothes, apparel and attire) is items worn on the body. Clothing is typically made of fabrics or textiles but over time has included garments made from animal skin or other thin sheets of materials put together. The wearing of clothing is mostly restricted to human beings and is a feature of all human societies. The amount and type of clothing worn depends on gender, body type, social, and geographic considerations.
                                        Clothing serves many purposes: it can serve as protection from the elements, rough surfaces, rash-causing plants, insect bites, splinters, thorns and prickles by providing a barrier between the skin and the environment. Clothes can insulate against cold or hot conditions, and they can provide a hygienic barrier, keeping infectious and toxic materials away from the body. Clothing also provides protection from ultraviolet radiation.
                                        Wearing clothes is also a social norm, and being deprived of clothing in front of others may be embarrassing. In most parts of the world, not wearing clothes in public so that genitals, breasts or buttocks are visible could be considered indecent exposure.
                                        

                                    </p>
                                </div>
                                <div className="card-footer bg-transparent border-0 p-0 text-right">
                                        {moreLink("na")}
                                </div>
                                 
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 mx-auto">
                        <div className="jumbotron p-1 bg-transparent">
                            <div className="card bg-white border-0 w3-card standard-height">
                                <img src={secondImage} className="card-img-top" alt=""/>
                                <div className="card-body bg-transparent">
                                    <label className="text-dark card-title-font">
                                        Womens Wear
                                    </label>
                                    <p className="lead content-font text-muted ">
                                        Description<br/>
                                        Clothing (also known as clothes, apparel and attire) is items worn on the body. Clothing is typically made of fabrics or textiles but over time has included garments made from animal skin or other thin sheets of materials put together. The wearing of clothing is mostly restricted to human beings and is a feature of all human societies. The amount and type of clothing worn depends on gender, body type, social, and geographic considerations.
                                        Clothing serves many purposes: it can serve as protection from the elements, rough surfaces, rash-causing plants, insect bites, splinters, thorns and prickles by providing a barrier between the skin and the environment. Clothes can insulate against cold or hot conditions, and they can provide a hygienic barrier, keeping infectious and toxic materials away from the body. Clothing also provides protection from ultraviolet radiation.
                                        Wearing clothes is also a social norm, and being deprived of clothing in front of others may be embarrassing. In most parts of the world, not wearing clothes in public so that genitals, breasts or buttocks are visible could be considered indecent exposure.
                                        

                                    </p>
                                </div>
                                <div className="card-footer bg-transparent border-0 p-0 text-right">
                                        {moreLink("na")}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>


                <div className="row mb-5">
                    <div className="col-md-5 mx-auto">
                        <div className="jumbotron p-1 bg-transparent">
                            <div className="card bg-white border-0 w3-card standard-height">
                                <img src={firstImage} className="card-img-top" alt=""/>
                                <div className="card-body bg-transparent">
                                    <label className="text-dark card-title-font">
                                        Mens Wear
                                    </label>
                                    <p className="lead content-font text-muted ">
                                        Description<br/>
                                        Clothing (also known as clothes, apparel and attire) is items worn on the body. Clothing is typically made of fabrics or textiles but over time has included garments made from animal skin or other thin sheets of materials put together. The wearing of clothing is mostly restricted to human beings and is a feature of all human societies. The amount and type of clothing worn depends on gender, body type, social, and geographic considerations.
                                        Clothing serves many purposes: it can serve as protection from the elements, rough surfaces, rash-causing plants, insect bites, splinters, thorns and prickles by providing a barrier between the skin and the environment. Clothes can insulate against cold or hot conditions, and they can provide a hygienic barrier, keeping infectious and toxic materials away from the body. Clothing also provides protection from ultraviolet radiation.
                                        Wearing clothes is also a social norm, and being deprived of clothing in front of others may be embarrassing. In most parts of the world, not wearing clothes in public so that genitals, breasts or buttocks are visible could be considered indecent exposure.
                                        

                                    </p>
                                </div>
                                <div className="card-footer bg-transparent border-0 p-0 text-right">
                                        {moreLink("na")}
                                </div>
                                 
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 mx-auto">
                        <div className="jumbotron p-1 bg-transparent">
                            <div className="card bg-white border-0 w3-card standard-height">
                                <img src={secondImage} className="card-img-top" alt=""/>
                                <div className="card-body bg-transparent">
                                    <label className="text-dark card-title-font">
                                        Womens Wear
                                    </label>
                                    <p className="lead content-font text-muted ">
                                        Description<br/>
                                        Clothing (also known as clothes, apparel and attire) is items worn on the body. Clothing is typically made of fabrics or textiles but over time has included garments made from animal skin or other thin sheets of materials put together. The wearing of clothing is mostly restricted to human beings and is a feature of all human societies. The amount and type of clothing worn depends on gender, body type, social, and geographic considerations.
                                        Clothing serves many purposes: it can serve as protection from the elements, rough surfaces, rash-causing plants, insect bites, splinters, thorns and prickles by providing a barrier between the skin and the environment. Clothes can insulate against cold or hot conditions, and they can provide a hygienic barrier, keeping infectious and toxic materials away from the body. Clothing also provides protection from ultraviolet radiation.
                                        Wearing clothes is also a social norm, and being deprived of clothing in front of others may be embarrassing. In most parts of the world, not wearing clothes in public so that genitals, breasts or buttocks are visible could be considered indecent exposure.
                                        

                                    </p>
                                </div>
                                <div className="card-footer bg-transparent border-0 p-0 text-right">
                                        {moreLink("na")}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>


                
            </React.Fragment>
        )
    }
}

export default AllProducts;


/*
<div className="btn-group" role="group">
                            <button type="button" className="btn bg-accent text-white border-right-0" data-target="#filterMenu" data-toggle="collapse" >
                                <i className="fa fa-filter"/> Filter
                            </button>
                            <button type="button" className="btn bg-accent text-white border-right-0" data-target="#sortMenu" data-toggle="collapse" >
                                <i className="fa fa-sort"/> Sort
                            </button>
                        </div>

                        
                        <div className="collapse" id="filterMenu">
                            <div class="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </div>

                        <div className="collapse" id="sortMenu">
                            <div class="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </div>


 */