import React from 'react';
import {Link} from 'react-router-dom'



function Details(props) {
  const  getPizzaDetails = (id) => {
        // return fetch(`http://localhost:9999/feed/pizza/${id}`)
        // .then(response => response.json())
        // .then(pizza => console.log(pizza))
    }
    return (
        <div className="pizza-details">
            <h3>{getPizzaDetails(props.match.params.id)}</h3>
          
        </div>
    )
}
export default Details;