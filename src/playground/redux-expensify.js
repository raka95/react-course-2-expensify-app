import {createStore,combineReducers} from 'redux';
import uuid from 'uuid';
 //   import { type } from 'os';






store.subscribe(()=>{
 const state=store.getState();
 const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
 console.log(state.filters.sortBy);
console.log(visibleExpenses);
console.log(state);
});
// console.log(store.getState());

const expenseOne=store.dispatch(addExpense({description:"Rent",amount:200,createdAt:-22000}));
const expenseTwo=store.dispatch(addExpense({description:'coffee',amount:300,createdAt:-1000}));
// store.dispatch(removeExpence({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:600}));
// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter("rent"));
// store.dispatch(sortByDate());
store.dispatch(sortByAmount());
store.dispatch(addExpense({description:'coka',amount:600,createdAt:-1000}));

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1260));

const demoState={
    expenses:[{
        id:'dvdwe',
        description:"January Rent",
        note:"This was final paymountfor that address",
        amount:54500,
        createdAt:0
    }],
    filters:{
        text:"rent",
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
};
// const user={
//     name:'jen',
//     age:23
// }
// console.log({
//     ...user,
//     location:'teh'
// });