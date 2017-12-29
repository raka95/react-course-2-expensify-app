import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from '../selectors/expenses-total';


export const ExpensesSummery=({expense})=>(
    <div>
    <h1>Viewing {expense.length} expenses totalling {selectExpensesTotal(expense)}</h1>
    </div>
);
//{
// //  return expense.reduce((a,b)=>{
// //      return a + b.amount;
// //  },0);
// return expense.map((val)=>val.amount).reduce((sum,value)=>{sum+value,0});
// };

const mapStateToProps=(state)=>({
    expense:selectExpenses(state.expenses,state.filters)
})
export default connect(mapStateToProps)(ExpensesSummery);
