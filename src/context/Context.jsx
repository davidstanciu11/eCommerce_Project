import { createContext, useReducer } from "react";

export const CartContext = createContext();

export const Context = (props) => {
	const reducer = (state, action) => {
		switch (action.type) {
			
			case "ADD":
				const tempstate = state.filter(
					(product) => action.payload.id === product.id
				);
				if (tempstate.length > 0) {
					return state;
				} else {
					return [...state, action.payload];
				};

				case "INCREASE": 
				const tempstateIncrease = state.map((product) => {
					if(product.id === action.payload.id){
						return {...product, quantity: product.quantity + 1}
					} else {
						return product;
					};
				});
				return tempstateIncrease;

				case "DECREASE":
				const tempstateDecrease = state.map((product) => {
					if (product.id === action.payload.id) {
						return { ...product, quantity: product.quantity - 1 };
					} else {
						return product;
					}
				});
				return tempstateDecrease
				
				case "REMOVE": 
				const tempstate4 = state.filter((product) => {
					return product.id !== action.payload.id;
				});
				return tempstate4;
				
			    default:
				return state;
		}
	};
	const [state, dispatch] = useReducer(reducer, []);
	const info = { state, dispatch };
	return (
		<CartContext.Provider value={info}>{props.children}</CartContext.Provider>
	);
};
