import { addExpense, editExpense,removeExpense} from '../../actions/expenses';

test('should setup remove action object',()=>{
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:"Remove-Expense",
        id:'123abc'
    });
});
test('should setup edit expense action object',()=>{
    const action=editExpense('123abc',{note:"New note value"});
    expect(action).toEqual({
        type:"Edit-Expense",
        id:'123abc',
        update:{
            note:"New note value"
        }
    })
});
test('should setup add expense action with provided values',()=>{
    const action = addExpense({
        description:"coffee",
        amount:2,
        note:"hot",
        createdAt:1000
    });
    expect(action).toEqual({
        type:'Add-EXPENSE',
        expense:{
            id:expect.any(String),
            description:"coffee",
            amount:2,
            note:"hot",
            createdAt:1000
        }
    })
})
test('should setup add expense action with default values',()=>{
    const action=addExpense();
    expect(action).toEqual({
        type:'Add-EXPENSE',
        expense:{
            id:expect.any(String),
            description:'',
            amount:0,
            note:'',
            createdAt:0
        }
    })
})