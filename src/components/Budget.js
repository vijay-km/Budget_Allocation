import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {dispatch, budget,currency } =  useContext(AppContext);

    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const newBudgetValue = event.target.value;
        setNewBudget(newBudgetValue);
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input type='number' step="10" value={ newBudget } onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget
