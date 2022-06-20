import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";


export const Card = ({item,resource}) => {
    return(
	<div className="tab-pane ps-2 pb-1 pt-2 pe-2" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
        <div className="card border-warning" style={{width: "18rem"}}>
  			<img src={`https://starwars-visualguide.com/assets/img/${resource === "people" ? "characters" : resource }/${item.uid}.jpg`} className="card-img-top" alt="..." />
 			 <div className="card-body bg-dark">
   			 <h5 className="card-title text-warning">{item.name}</h5>
    		 <Link to={`/single/${resource}/${item.uid}`}  className="btn btn-primary justify-content-center align-middle">Go somewhere</Link>
  			 </div>
		</div>
	</div>
		//Preguntar por el tema del link con los datos de los personajes
		//{`${properties == true ? {gender} : "null" }`}
  
    );


};

Card.propTypes = {
	item: propTypes.object,
	resource: propTypes.string
};