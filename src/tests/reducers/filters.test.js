import filtersReducers from '../../reducers/filters';
import moment from 'moment';
test('should setup default filter values',()=>{
    const state=filtersReducers(undefined,{type:"@@INIT"});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});
test("should set sortBy to amount",()=>{
    const state=filtersReducers(undefined,{type:"Sort-Amount"});
    expect(state.sortBy).toBe("amount");
});

test("should set sortBy to Date",()=>{
    const currentState={
        text:'',
        startDate:undefined,
        endDate:undefined,
        sortBy:'amount'
    };
    const action={type:"Sort-Date"};
    const state=filtersReducers(currentState,action);
    expect(state.sortBy).toBe("date");
});

test("should setup text filter value ",()=>{
    const action={
        type:"Text-Filter",
        text:"rent"
    };
    const state=filtersReducers(undefined,action);
    expect(state.text).toBe("rent");
});

 test("should setup startDate filter value",()=>{
     const x=moment(0).startOf('month');
     const action={
         type:"Start-Date",
         num:x
        };
     const state=filtersReducers(undefined,action);
     expect(state.startDate).toEqual(x);
 }) ;

 test("should setup endDate filter value",()=>{
    //  const endDate=moment();
     const action={
         type:"End-Date",
         num:moment(0)
     };
     const state=filtersReducers(undefined,action);
     expect(state.endDate).toEqual(moment(0));
 });