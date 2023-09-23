import React, { useContext, useState, useEffect } from "react";

import { AppContext } from "../context/AppContext";

const Currency = () => {
    // const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    // console.log(dispatch);
    const [newCurrency, setCurrency] = useState('£')

    useEffect(() => {
        // Side effect code here
        // This will run whenever `newCurrency` changes
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    }, [newCurrency, dispatch]); // Include `dispatch` as a dependency
    // Specify `newCurrency` as a dependency to trigger the effect when it changes

    const UpdateCurrency = (event) => {
        const newCurrencyValue = event.target.value;
        setCurrency(newCurrencyValue);
    };
    return (
        <div className="alert alert-primary">
            <span>Currency</span>
            <select className="custom-select" value={newCurrency} onChange={UpdateCurrency}>
                <option value='£' name='Pound'>£ Pound</option>
                <option value="$" name='Dollar'>$ Dollar</option>
                <option value="€" name='Euro'>€ Euro</option>
                <option value="₹" name='Rupee'>₹ Rupee</option>
            </select>

        </div>
    );
};

export default Currency;