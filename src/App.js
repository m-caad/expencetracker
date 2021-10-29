//Import React.
import React from "react";

// Import App.css.
import "./App.css";

// Import Child.js Component.
import Child from "./child";

// Import TransactionContext From transContext.js.
import { TransactionProvider } from "./transContext";

function App() {
	return (
		<div>
			<TransactionProvider>
				<Child />
			</TransactionProvider>
		</div>
	);
}

// Export App Funtion And Call On Index.js.
export default App;
