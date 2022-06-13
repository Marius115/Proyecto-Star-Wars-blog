const API_URL = "https://www.swapi.tech/api"
const API_CHARACTERS = "https://www.swapi.tech/api/people"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			planets: [],
			singleCharacter: {}
		},
		actions: {
	// !!!! ESTE ES GET CHARACTERS EN PLURAL !!!!!
			getCharacters: async () => {
				try {
					const response = await fetch(
						`${API_URL}/people`
					);
					const body = await response.json()
					if (response.status !== 200) {
						alert("no cargaron los personajes");
					return;
			}
			setStore({
				characters: body.results
			})

		    } catch (error) {
			alert("algo malo paso")
			console.log(error)
			}
			
		    },
		// como las propiedades de los personajes estan dentro de la url que nos arroja con /"numero" se pone en store, una ruta mas directa.
		// Posible error en la manera de fetch o falta de llamado de datos?
		// !!!! ESTE ES GET CHARACTER EN SINGULAR !!!!!
		getsingleCharacter: async (uid) => {
			try {
				const response = await fetch(
					`${API_URL}/people/${uid}`
				);
				const body = await response.json()
				if (response.status !== 200) {
					alert("no cargo el personaje");
				return;
		}
		setStore({
			singleCharacter: {
				...body.result.properties, 
				uid: body.result.uid,
				description: body.result.description,
			}	
		})

		} catch (error) {
		alert("algo malo paso")
		console.log(error)
		}
		
		},


		// !!!! ESTE ES GET VEHICLES EN PLURAL !!!!!

				getVehicles: async () => {
					try {
						const response = await fetch(
							`${API_URL}/vehicles`
						);
						const body = await response.json()
						if (response.status !== 200) {
							alert("no cargaron los vehiculos");
						return;
				}
				setStore({
					vehicles: body.results
				})

				} catch (error) {
				alert("algo malo paso")
				console.log(error)
				}
				
			    },

	    // !!!! ESTE ES PLANETS EN PLURAL !!!!!
				getPlanets: async () => {
					try {
						const response = await fetch(
							`${API_URL}/planets`
						);
						const body = await response.json()
						if (response.status !== 200) {
							alert("no cargaron los planetinos");
						return;
				}
				setStore({
					planets: body.results
				})

				} catch (error) {
				alert("algo malo paso")
				console.log(error)
				}
				
			    }


	}
}
}

export default getState;
