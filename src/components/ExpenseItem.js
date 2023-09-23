import React, {useContext} from 'react';

import {TiDelete} from 'react-icons/ti';

import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const {dispatch } = useContext(AppContext);

    const handleDeleteExpence = () =>{
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) =>{
        const expense = {
            name : name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.cost}</td>
            <td><button oclick={event=>increaseAllocation(props.name)}>+</button></td>
            <td><TiDelete size='1.5em' oclick={handleDeleteExpence}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;
