import React from "react";
import {Link} from "react-router-dom";

export const LinksList = ({ links }) => {
    if (!links.length) {
        return <p className='text-center pt-5'>there are not links</p>
    }
    return (
        links.map( (link, index) => {
         return (
             <div className="card mt-5 ml-5 mr-5 mb-2" key={index + link._id}>
                 <div className="card-body">
                     <h5 className="card-title">Link #{index + 1}</h5>
                     <p className="card-text">original [{link.from}]</p>
                     <p className="card-text">shortened [{link.to}]</p>
                        <Link to={`/detail/${link._id}`}>open</Link>
                 </div>
             </div>
         )
        })
    )
};