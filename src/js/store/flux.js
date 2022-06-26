const API_URL = "https://www.swapi.tech/api"


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],
			planets: [],
			singleItem: {},
			favorites: [],
			heartButton: "outline-",
		},
		actions: {
	// !!!! ESTE ES GET ITEMS EN PLURAL !!!!!
			getItems: async (resource) => {
				try {
					const response = await fetch(
						`${API_URL}/${resource}`
					);
					const body = await response.json()
					if (response.status !== 200) {
						alert("No cargaron los items");
						return;
					}
			setStore({
				[`${resource}`]: body.results
			})

		    } catch (error) {
			alert("algo malo paso")
			console.log(error)
			}
			
		    },
		

		// !!!! ESTE ES GET ITEMS EN SINGULAR !!!!!
		getsingleItem: async (resource, uid) => {
			try {
				const response = await fetch(
					`${API_URL}/${resource}/${uid}`
				);
				const body = await response.json()
				if (response.status !== 200) {
					alert("no cargo el personaje");
				return;
		}
		setStore({
			singleItem: {
				...body.result.properties, 
				uid: body.result.uid,
				description: body.result.description
				
			}	
		})

		} catch (error) {
		alert("algo malo paso")
		console.log(error)
		}
		
		},

	//aqui iria para favorite
	removeSingleItem: async () => {
				
		setStore ({
			singleItem: ""
		})
	},	

	addFavorites: (resource) => {
		const store = getStore()
		if (store.favorites.find(favorite => favorite.name == resource.name)) return
		setStore({
			favorites: [...store.favorites, resource]
		})
	},
	deleteFavorites: (resource) => {
		setStore({
			favorites: [...getStore().favorites.filter((item,index)=>{
				if (resource.name !== item.name) return true;
			})]
		})
	},
	holdHeartButton: () => {
		setStore ({
			heartButton: "",

		}
		)
	}


	}
}
}

export default getState;
