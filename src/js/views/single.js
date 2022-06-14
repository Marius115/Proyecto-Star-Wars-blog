import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	
	useEffect( () => {
		if (!params.resource || !params.uid ) return;
		actions.getsingleCharacter(params.resource, params.uid)
		
	},[params.resource, params.uid]);

    //Los params resource y uid deberian establecer los parametros, porque no se relacionan?
	// por alguna razon esto no me esta trayendo el nombre del personaje de manera individual
	//El condicional en la imagen es el mismo que en card
	//Se usa el mismo resource para establece las 3 categorias
	return (
		<div className="jumbotron">

		
			<div className="col-6 d-flex justify-content-center align-middle">
				
					<img src={`https://starwars-visualguide.com/assets/img/${params.resource == "people" 
						? "characters"
						: params.resource}/${store.singleCharacter.uid}.jpg`}/>
			</div>

   
			

			

		

    
			

	
			
			
			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
