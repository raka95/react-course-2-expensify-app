import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import uuid from "uuid";

test("should set default state",()=>{
    const state=expensesReducers(undefined,{type:"@@INIT"});
    expect(state).toEqual([]);
});

test("should remove expense by id",()=>{
     const action={
         type:"Remove-Expense",
         id:expenses[1].id
     }
     const state=expensesReducers(expenses,action);
     expect(state).toEqual([expenses[0],expenses[2]]);
 });

 test("should not remove expense if id not found",()=>{
    const action={
        type:"Remove-Expense",
        id:"-1"
    }
    const state=expensesReducers(expenses,action);
    expect(state).toEqual(expenses);
});

test("should add expense",()=>{
    const expense={
        id:uuid(),
        description:"ice",
        note:'',
        createdAt:2,
        amount: 4000
    }
    const action={
        type:"Add-EXPENSE",
        expense
    };
    const state=expensesReducers(expenses,action);
    expect(state).toEqual([...expenses,expense]);
});

test("should Edit expense by id",()=>{
    const amount=40;
    const action={
        type:"Edit-Expense",
        id:expenses[0].id,
        update:{
            amount
        }
    };
    const state=expensesReducers(expenses,action);
    expect(state[0].amount).toEqual(amount);
});

test("should not Edit expense if id not found",()=>{
    const amount=40;
    const action={
        type:"Edit-Expense",
        id:"-1",
        update:{
            amount
        }
    };
    const state=expensesReducers(expenses,action);
    expect(state).toEqual(expenses);
});
