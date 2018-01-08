import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from '../selectors/expenses-total';


export const ExpensesSummery=({expense})=>(
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{expense.length}</span> expenses totalling <span>{selectExpensesTotal(expense)}</span></h1>
            <div  className="page-header__actions">
                <Link className="button" to="/create" >Add Expense</Link>            
            </div>
            </div>
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
