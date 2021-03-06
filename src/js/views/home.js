import React, {useContext} from "react";
import "../../styles/home.css";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";

export const Home = () =>{ 
	const {store, actions} = useContext(Context);
	return (
		 <div className="container">
			<div className="d-flex flex-wrap w-100">
				<h2 className="text-warning">Characters</h2>
				<div className="d-flex overflow-scroll">
					{store.people.map(
						(item) => {
							return (
							<Card 
							key={item.uid}
							item={item} 
							resource={"people"}/>
							)
						}
					)}
				</div>
			</div>

				<div className="d-flex flex-wrap w-100">
				  <h2 className="text-warning">Vehicles</h2>
					<div className="d-flex overflow-scroll">
						{store.vehicles.map(
							(item) => {
								return (
								<Card 
								key={item.uid}
								item={item} 
								resource={"vehicles"}/>
								)
							}
						)}
					</div>
				</div>
		
				<div className="d-flex flex-wrap w-100">
				<h2 className="text-warning">Planets</h2>
					<div className="d-flex overflow-scroll">
						{store.planets.map(
							(item) => {
								return (
								<Card 
								key={item.uid}
								item={item} 
								resource={"planets"}/>
								)
							}
						)}
					</div>
				</div>




		 </div>
	
);
};
