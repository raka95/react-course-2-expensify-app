// import {Link,NavLink} from  'react-router-dom';
import React from 'react';
import ConnectExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
export const ExpenseDashboardPage=()=>(
    <div>
        <ExpenseListFilters />
        <ConnectExpenseList />
    </div>
);
export default ExpenseDashboardPage;