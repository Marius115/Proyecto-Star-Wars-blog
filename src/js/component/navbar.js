import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/" className="w-25 ms-3">
			<img
          src="https://webstockreview.net/images/starwars-clipart-logo-4.png"
          className="w-50 content-center"
          style={{
            maxWidth: "100px",
          }}
        />
			</Link>
			<div className="ml-auto me-3">
				<Link to="/demo">
					<button className="btn btn-warning">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};

// ESTILIZAR EL BOTON DE FAVORITOS
//PONERLE EL DROPDOWN
//PONLO DECENTE 