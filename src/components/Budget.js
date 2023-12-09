import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, updateBudget } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    const updatedBudget = event.target.value;
    setNewBudget(updatedBudget);

    // Update the budget in the context immediately
    updateBudget(updatedBudget);
  };

  useEffect(() => {
    setNewBudget(budget);
  }, [budget]);

  return (
    <div className='alert alert-secondary'>
      <span>Budget: £{newBudget}</span>
      <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
    </div>
  );
};

export default Budget;
