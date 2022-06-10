const API_URL = "https://www.swapi.tech/api"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			planets: []
		},
		actions: {
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
			
		} 
	}
}
}

export default getState;
