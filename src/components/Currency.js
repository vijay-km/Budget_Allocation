import React, { useContext, useState } from "react";

import { AppContext } from "../context/AppContext";

const Currency = () => {
    // const { currency } = useContext(AppContext);
    const {dispatch} = useContext(AppContext);
    // console.log(dispatch);
    const [newCurrency, setCurrency] = useState('£ Pound')

    const UpdateCurrency = async(event) => {
        setCurrency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });

    }
    return (
        <div className="alert alert-primary">
            <span>Currency</span>
            <select className="custome-select" value= {newCurrency} onChange={UpdateCurrency}>
                <option defaultValue value='£' name='Pound'>£ Pound</option>
                <option value="$" name='Dollar'>$ Dollar</option>
                <option value="€" name='Euro'>€ Euro</option>
                <option value="₹" name='Rupee'>₹ Rupee</option>
            </select>
        </div>
    );
};

export default Currency;