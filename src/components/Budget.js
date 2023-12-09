import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, updateBudget, expenses, selectedCurrency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
 

  const handleBudgetChange = (event) => {
    const enteredValue = parseInt(event.target.value, 10); // Parse as an integer
    const updatedBudget = Math.min(Math.max(enteredValue, totalExpenses), 20000);
    setNewBudget(updatedBudget);
    updateBudget(updatedBudget);

    if (enteredValue > 20000) {
      window.alert('Budget cannot exceed 20,000');
    }

    if (enteredValue < totalExpenses) {
      window.alert('You cannot reduce the budget below ' + totalExpenses);
    }
  };



  useEffect(() => {
    // Update the budget in the context after each render
    updateBudget(newBudget);
  }, [newBudget, updateBudget]);

  return (
    <div className='alert alert-secondary'>
       <span>Budget: ({selectedCurrency})</span>
      <input
        type='number'
        step='10'
        max={20000}
        value={newBudget}
        onChange={handleBudgetChange}
      />

    </div>
  );
};

export default Budget;
