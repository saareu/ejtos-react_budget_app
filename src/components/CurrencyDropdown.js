import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './CurrencyDropdown.css'; // Import external stylesheet

const CurrencyDropdown = () => {
    const { selectedCurrency, changeSelectedCurrency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        changeSelectedCurrency(newCurrency);
    };

    return (
        <select
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            className="currency-dropdown"
        >
            <option value="£">Pound-£</option>
            <option value="$">Dollar-$</option>
            <option value="€">Euro-€</option>
            <option value="₹">Rupee-₹</option>
        </select>
    );
};

export default CurrencyDropdown;
