export default (expenses)=>{
    if(expenses.length==0){
        return 0;
    }else{
        return expenses.map((val)=>val.amount).reduce((sum,value)=>sum+value,0);
    }

}
//import React from 'react';
// import {connect} from 'react-redux';
// import selectExpenses from "./expenses";
// const selectExpensesTotal=({expense})=>{
// //  return expense.reduce((a,b)=>{
// //      return a + b.amount;
// //  },0);
// return expense.map((val)=>val.amount).reduce((sum,value)=>{sum+value,0});
// };

// const mapStateToProps=(state)=>{
//     expense:selectExpenses(state.expenses,state.filters)
// }
// export default connect(mapStateToProps)(selectExpensesTotal);
