import React from 'react';
import {Link} from 'react-router-dom'



function Details(props) {
    return (
        <div className="pizza-details">
            <h3>{props.match.params.id}</h3>
          
        </div>
    )
}
export default Details;