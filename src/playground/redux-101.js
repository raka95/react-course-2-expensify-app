import {createStore} from 'redux';
const A={a:2};
const{b=3}=A;
console.log(A,b);
const incrementCount=({incrementBy=1}={})=>{
    return {
        type:"INCREMENT",
        incrementBy
    };
};
// const decrementCount=(payload={})=>{
//     return {
//         type:"DECREMENT",
//         decrementBy:!!payload.incrementBy ? payload.incrementBy:1
//     };
// };
// const decrementCount=({decrementBy}={})=>{
//     return {
//         type:"DECREMENT",
//         decrementBy:!!decrementBy ? decrementBy:1
//     };
// };
const decrementCount=({decrementBy=1}={})=>{
    return {
        type:"DECREMENT",
        decrementBy
    };
};
const ResetCount=()=>{
    return{
        type:'RESET'
    };
};
const SetCount=({count})=>{
    return{
        type:"SET",
        count
    };
};
const countReducer=(state={count:0},action)=>{
        // let decrementBy= typeof action.decrementBy==="number" ? action.decrementBy:1;
        switch(action.type){
            case"INCREMENT":
                return {
                    count:state.count+action.incrementBy
                };
            case "DECREMENT":
                return{
                    // count:state.count-decrementBy
                    count:state.count-action.decrementBy
                };
            case "RESET":
                return{
                    count:0
                };
            case "SET":
                return {
                    count:action.count
                }
            default:
                return state;
        }  
    };
const store =createStore(countReducer);
const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch(incrementCount({incrementBy:8}));
store.dispatch(decrementCount({decrementBy:2}));
store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(incrementCount({incrementBy:3}));
store.dispatch(decrementCount({}));
// unsubscribe();
// console.log(store.getState());
store.dispatch(ResetCount());
// console.log(store.getState());

store.dispatch(SetCount({count:19}));
// console.log(store.getState());