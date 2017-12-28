import uuid from "uuid";
//Add-Expence

export const addExpense=(
    {
        description='',
        note='',
        amount=0,
        createdAt=0
    }={}
)=>({
    type:"Add-EXPENSE",
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
}
);
//Remove-Expense

export const removeExpense=({id}={})=>(
    {
        type:"Remove-Expense",
        id
    }
);
//Edit-Expense

export const editExpense=(id,update)=>({
    type:"Edit-Expense",
    id,
    update
});