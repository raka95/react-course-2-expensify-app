// import {Link,NavLink} from  'react-router-dom';
import React from 'react';
import ConnectExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummery from './ExpensesSummery';

export const ExpenseDashboardPage=()=>(
    <div>
        <ExpensesSummery />
        <ExpenseListFilters />
        <ConnectExpenseList />
    </div>
);
export default ExpenseDashboardPage;