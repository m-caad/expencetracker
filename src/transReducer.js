// Reducer Variable.
const TransactionReducer = (state, action) => {
	switch (action.type) {
		// Calling DELETE_TRANSACTION case in transReducer.js file on dispatch action.
		case "DELETE_TRANSACTION":
			return [...action.payload];
		// return state.splice(action.payload,1)

		// Calling ADD_TRANSACTION case in transReducer.js file on dispatch action.
		case "ADD_TRANSACTION":
			return [action.payload, ...state];

		default:
			return state;
	}
};

// Export TransactionReducer.
export default TransactionReducer;
