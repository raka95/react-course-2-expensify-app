//Expences Reducers  

const expensesReducerDefault=[];
export default (state=expensesReducerDefault,action)=>{
// const expensesReducer=(state=expensesReducerDefault,action)=>{
    switch(action.type){
        case "Add-EXPENSE":
            return [
                ...state,
                action.expense
            ];
        case "Remove-Expense":
            return state.filter(({id})=>id!==action.id);
        case "Edit-Expense":
            return state.map((val)=>{
                if(val.id===action.id)
                    return {
                        ...val,
                        ...action.update
                    };
                    return val;
            })
        default:
            return state;
    }
};
//export default expensesReducer;