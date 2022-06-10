import React, {useContext} from "react";
import "../../styles/home.css";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";

export const Home = () =>{ 
	const {store, actions} = useContext(Context)
     return (
		 <div className="container">
			<div className="d-flex flex-wrap w-100">
				<div className="d-flex">
					{store.characters.map(
						(character) => {
							return (
							<Card 
							key={character.uid}
							item={character} 
							src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
							/>
							)
						}
					)}
				</div>

			</div>
		 </div>
	
);
};
