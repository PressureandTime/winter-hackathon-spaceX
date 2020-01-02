import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function HomePage () {
	const balance = useSelector((state) => state.BalanceReducer.balance);
	const loan = useSelector((state) => state.LoanReducer.loan);
	const dispatch = useDispatch();

	function applyLoanHandle () {
		dispatch({ type: 'APPLY' });
	}
	return (
		<div>
			<h2>Balance: {balance}</h2>
			<h2>{loan ? 'Loan Applied' : 'Loan Needed'}</h2>
			<button className="button-style" disabled={loan ? true : false} onClick={applyLoanHandle}>
			{loan? "Loan Applied" : "Apply for loan"}
			</button>
		</div>
	);
}

export default HomePage;
