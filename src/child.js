// Import React And Hooks.
import React, { useContext, useState } from "react";

// Import TransactionContext From transContext.js.
import { TransactionContext } from "./transContext";

// Function Base Coponent.
function Child() {
	const { transaction, addTransaction, delTransaction } =
		useContext(TransactionContext);

	let [newDesc, setDesc] = useState("");
	let [newAmount, setAmount] = useState(0);

	// This Function will be called on Form submit.
	const handleAddition = (event) => {
		event.preventDefault();

		if (Number(newAmount) === 0) {
			alert("Please enter correct value");
			return false;
		}

		addTransaction({
			amount: Number(newAmount),
			desc: newDesc,
		});

		setDesc("");
		setAmount(0);
	};

	// This Function will be called on INCOME Heading.
	const getIncome = () => {
		let income = 0;

		for (var i = 0; i < transaction.length; i++) {
			if (transaction[i].amount > 0) {
				income = income + transaction[i].amount;
			}
		}

		return income;
	};

	// This Function will be called on EXPENSE Heading.
	const getExpense = () => {
		let expense = 0;

		for (var i = 0; i < transaction.length; i++) {
			if (transaction[i].amount < 0) {
				expense += transaction[i].amount;
			}
		}

		return expense;
	};

	return (
		<div className="container">
			<h1 className="text-center"> Expense Tracker </h1>

			<h3>
				Your Balance <br /> $ {getIncome() + getExpense()}
			</h3>

			<div className="expense-container">
				<h3>
					INCOME <br /> $ {getIncome()}
				</h3>

				<h3>
					EXPENSE <br /> $ {getExpense()}
				</h3>
			</div>

			<h3> History </h3>
			<hr />

			<ul className="transition-list">
				{transaction.map((trasObj, ind) => {
					return (
						<li key={ind}>
							<button
								className="delete-btn"
								onClick={() => {
									transaction.splice(
										ind,
										1
									);
									delTransaction(
										transaction
									);
								}}>
								X
							</button>

							<span className="text">
								{trasObj.desc}
							</span>

							<span>${trasObj.amount}</span>
						</li>
					);
				})}
			</ul>

			<h3> Add New Transaction </h3>
			<hr />

			<form
				className="transaction-form"
				onSubmit={handleAddition}>
				<label>Enter Test</label>
				<br />
				<input
					onChange={(ev) => setDesc(ev.target.value)}
					type="text"
					placeholder="Descriptoion"
					value={newDesc}
					required
				/>
				<br />
				<label>Enter Amount</label>
				<br />
				<input
					onChange={(ev) => setAmount(ev.target.value)}
					type="number"
					placeholder="Amount"
					value={newAmount}
					required
				/>

				{/* This Is The Button.*/}

				<input type="submit" value="Add Transaction" />
			</form>
		</div>
	);
}

// Export Child.
export default Child;
