import React, {useContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Card = ({item,...props}) => {
	const [isFavorite, setisFavorite] = useState(false)
    const {store, actions} = useContext(Context)
useEffect(() =>{
	if (!store.favorites.find(favorite => item.name == favorite.name)) {
		setisFavorite(false)
	}
},[store.favorites]) 
    return(
	<div className="tab-pane ps-2 pb-1 pt-2 pe-2" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
        <div className="card border-warning" style={{width: "18rem"}}>
  			<img src={`https://starwars-visualguide.com/assets/img/${props.resource === "people" ? "characters" : props.resource }/${item.uid}.jpg`} className="card-img-top" alt="..." />
 			 <div className="card-body bg-dark">
   			 <h3 className="card-title text-warning">{item.name}</h3>	
			 <hr className="my-4" />
				<div className="container-fluid justify-content-between p-0 d-flex">
					<Link to={`/single/${props.resource}/${item.uid}`}  className="btn btn-primary justify-content-center align-middle">More Info!</Link>
					<button type="button" className={`btn btn-${isFavorite
								? ""
								: "outline-"}warning btn-sm ${props.key}`} onClick={(e)=>{
								actions.addFavorites({...item, resource: props.resource})
								setisFavorite (true) 
							}}><i className="fa-regular fa-heart"></i></button>
				</div>
  			 </div>
		</div>
	</div>
		//Preguntar por el tema del link con los datos de los personajes
		//{`${properties == true ? {gender} : "null" }`}
  
    );


};

Card.propTypes = {
	item: PropTypes.object,
	resource: PropTypes.string
};