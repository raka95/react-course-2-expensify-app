import React from 'react';
import {connect} from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";


export const ExpenseList=({expense})=>(
    <div>
        {expense.length===0 ? (
            <p>No Expenses</p>
        ):(
            expense.map((val)=>(
                <ExpenseListItem 
                    key={val.id} 
                    {...val}/>
                )
            )
        )}
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

