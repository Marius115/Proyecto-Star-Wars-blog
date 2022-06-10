import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";


export const Card = ({item}) => {
    return(
        <div className="card" style={{width: "18rem"}}>
  			<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..." />
 			 <div className="card-body">
   			 <h5 className="card-title">{item.name}</h5>
   			 <p className="card-text"> Lorem Ipsum </p>
    		 <Link to={`/single/people/${item.uid}`}  className="btn btn-primary">Go somewhere</Link>
  			 </div>
		</div>
		//Preguntar por el tema del link con los datos de los personajes
  
    );


};

Card.propTypes = {
	item: propTypes.object
};