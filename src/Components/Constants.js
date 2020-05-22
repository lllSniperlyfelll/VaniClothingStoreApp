import React from 'react';
import { Link } from 'react-router-dom';



export const appTitle = [
                            React.createElement("i",{class: "fa fa-shopping-bag"},""), 
                            React.createElement("span"  ,{} ,` Clothes store `)
                        ];

   
                        



/*
<Link to="/product" className="btn btn-accent text-white w3-card">More <i className="fa fa-arrow-right"></i></Link>
 */
export const moreLink =(id) =>{ 
    
    const arrowIcon = React.createElement("i", {class: "fa fa-arrow-right"},"");
    
    const moreText = React.createElement("span",{},`More `); 
    
    const wholeLink = React.createElement(Link, {
        class:"btn btn-accent text-white w3-card",
        to: `/product/${id}`
    }, [moreText,arrowIcon]);
    
    return wholeLink;
}
