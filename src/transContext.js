// Import React And Hooks.
import React, { createContext, useReducer } from "react";

// Import TransactionContext From transContext.js.
import TransactionReducer from "./transReducer";

// initialTransaction Make The Array.
const initialTransaction = [
	// { amount: 500, desc: "Cash" },
	// { amount: -50, desc: "Book" },
	// { amount: 200, desc: "test" },
	// { amount: -200, desc: "test" },
];

// Export TransactionContext Using The createContextHook.
export const TransactionContext = createContext(initialTransaction);

// Export TransactionProvider.
export const TransactionProvider = ({ children }) => {
	let [state, dispatch] = useReducer(
		TransactionReducer,
		initialTransaction
	);

	// console.log("reducer state", state)

	// Delete Existing Transaction Action.
	function delTransaction(transaction) {
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: transaction,
		});
	}

	//  Add Existing Transaction Action.
	function addTransaction(transObj) {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: {
				amount: transObj.amount,
				desc: transObj.desc,
			},
		});
	}

	return (
		<TransactionContext.Provider
			value={{
				transaction: state,
				delTransaction,
				addTransaction,
			}}>
			{children}
		</TransactionContext.Provider>
	);
};
