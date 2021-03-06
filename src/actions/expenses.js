import uuid from "uuid";
import database from "../firebase/firebase";
//Add-Expence



export const addExpense=(expense)=>({
    type:"Add-EXPENSE",
    expense
}
);

export const startAddExpense=(expenseData={})=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        const { 
            description='',
            note='',
            amount=0,
            createdAt=0
        }=expenseData;
        const expense={description,note,amount,createdAt};

        // return for test v153
        return database.ref(`Users/${uid}/Expenses`).push(expense).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }))
        })
    }
}

// export const addExpense=(
//     {
//         description='',
//         note='',
//         amount=0,
//         createdAt=0
//     }={}
// )=>({
//     type:"Add-EXPENSE",
//     expense:{
//         id:uuid(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// }
// );



//Remove-Expense



export const removeExpense=({id})=>(
    {
        type:"Remove-Expense",
        id
    }
);

export const startRemoveExpense=({id}={})=>{
    return (dispatch,getState)=>{
            const uid=getState().auth.uid;        
            return database.ref(`Users/${uid}/Expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({id}));
        });
    }
}



//می تونیم به این صورت هم  بینویسیم و همه تغییرات فقط همین جاست :
// export const startRemoveExpense=({id}={})=>{
//     return (dispatch)=>{
//             return database.ref(`Expenses/${id}`).remove().then(()=>{
//             dispatch(  {
//                 type:"Remove-Expense",
//                 id
//             });
//         });
//     }
// }




//Edit-Expense

export const editExpense=(id,update)=>({
    type:"Edit-Expense",
    id,
    update
});

export const startEditExpense=(id,update)=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        return database.ref(`Users/${uid}/Expenses/${id}`).update(update).then(()=>{
            dispatch(editExpense(id,update));
        })
    }
}

//SET-EXPENSE

export const setExpense=(expenses)=>({
    type:"SET-EXPENSES",
    expenses
})

//export startSetExpense
export const startSetExpense=()=>{
    return(dispatch,getState)=>{
        const uid=getState().auth.uid;
        return database.ref(`Users/${uid}/Expenses`).once('value').then((snapshot)=>{
            const expenses=[];            
            snapshot.forEach((childSnapshot)=>{
                expenses.push({
                    ...childSnapshot.val(),
                    id:childSnapshot.key,
                });
            });
           dispatch(setExpense(expenses));
        });
    }
}