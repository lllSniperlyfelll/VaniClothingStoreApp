import React, { Component } from 'react';
import firstImage from '../../SampleImages/1.jpg';
import secondImage from '../../SampleImages/2.jpg';
import thirdImage from '../../SampleImages/3.png';
import fourthImage from '../../SampleImages/4.png';
import {moreLink} from '../Constants';

import {Link} from 'react-router-dom';

class AllProducts extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div className="jumbotron p-1 bg-transparent">
                            <div className="card bg-white border-0 w3-card standard-height">
                                <img src={firstImage} className="card-img-top"/>
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
                                <img src={secondImage} className="card-img-top"/>
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
