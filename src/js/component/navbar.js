import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext (Context);

	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/" className="w-25 ms-3">
				<img
					src="https://webstockreview.net/images/starwars-clipart-logo-4.png"
					className="w-50 content-center"
					style={{
						maxWidth: "100px",
					}}
				/>
			</Link>
			<div className="ml-auto me-4">
				<div className="dropdown">
					<button className="btn btn-dark border border-warning border-2 dropdown-toggle d-flex dd-items" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						<p className="m-0 me-1 text-light">Favorites</p> 
						<div className="dot me-1">{store.favorites.length}</div>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favorites.map((item, index) => {
							return (
								<div key={index} className="d-flex">
									<Link className="dropdown-item" to={`/single/${item.resource}/${item.uid}`}>{item.name}</Link >
									<span className=" mt-1 me-1"><i className="fa-solid fa-x" onClick={(e) => {
										actions.deleteFavorites(item)
									}}></i></span>
								</div>
							)
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

// Errror en el badge, linea 22(evitar bs y practicar css).

//error de adicion multiple(condicional arreglado en favorite ).
