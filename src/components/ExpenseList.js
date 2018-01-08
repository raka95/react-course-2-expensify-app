import React from 'react';
import {connect} from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";


export const ExpenseList=({expense})=>(
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>        
        </div>
        <div className="list-body">
            {expense.length===0 ? (
                <div className="list-item list-item--message">
                <span>No Expenses</span>
                </div>
            ):(
                expense.map((val)=>(
                    <ExpenseListItem 
                        key={val.id} 
                        {...val}/>
                    )
                )
            )}
        </div>    
    </div>
);
//
// 
const mapStateToProps=(state)=> (
    {
        expense:selectExpenses(state.expenses,state.filters)
    }
);
export default connect(mapStateToProps)(ExpenseList);
//

// const ConnectExpenseList=connect((state)=>{
//     return {
//         name:"Ramin",
//         expense:state.expenses,
//         filters:state.filters
//     };
// })(ExpenseList);
// export default ConnectExpenseList;

