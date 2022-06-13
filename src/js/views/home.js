import React, {useContext} from "react";
import "../../styles/home.css";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";

export const Home = () =>{ 
	const {store, actions} = useContext(Context);
	return (
		 <div className="container">
			<div className="d-flex flex-wrap w-100">
				<h2 className="text-secondary">Characters</h2>
				<div className="d-flex overflow-scroll">
					{store.characters.map(
						(character) => {
							return (
							<Card 
							key={character.uid}
							item={character} 
							resource={"people"}
							
							/>
							)
						}
					)}
				</div>
			</div>

				<div className="d-flex flex-wrap w-100">
				  <h2 className="text-secondary">Vehicles</h2>
					<div className="d-flex overflow-scroll">
						{store.vehicles.map(
							(vehicle) => {
								return (
								<Card 
								key={vehicle.uid}
								item={vehicle} 
								resource={"vehicles"}
								
								/>
								)
							}
						)}
					</div>
				</div>
		
				<div className="d-flex flex-wrap w-100">
				<h2 className="text-secondary">Planets</h2>
					<div className="d-flex overflow-scroll">
						{store.planets.map(
							(planets) => {
								return (
								<Card 
								key={planets.uid}
								item={planets} 
								resource={"planets"}

								/>
								)
							}
						)}
					</div>
				</div>




		 </div>
	
);
};
