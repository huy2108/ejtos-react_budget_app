import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses,currency } = useContext(AppContext);

    const changeBudget = (val)=>{
        
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

        if(val > 20000) alert("Buget cannot exceed 20000!");
		
		if(val<totalExpenses) {
			alert("You cannot reduce the budget that is already allocated!");
		} else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
			}
        
	}
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: <span>{currency}</span></span>
            <input  type='number' value={budget} step='10' onChange={e=>changeBudget(e.target.value)}></input>
        </div>
    );
};

export default Budget;


