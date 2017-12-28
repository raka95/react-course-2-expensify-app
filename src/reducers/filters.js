import moment from 'moment';
//filters reducers

const filtersReducerDefaults={
    text:'',
    sortBy:"date",
    startDate:moment().startOf("month"),
    endDate:moment().endOf("month")
};
 export default (state=filtersReducerDefaults,action)=>{
//const filtersReducer=(state=filtersReducerDefaults,action)=>{
    switch(action.type){
        case "Text-Filter":
            return {
                ...state,
                text:action.text
            } ;
        case "Sort-Amount":
            return {
                ...state,
                sortBy:"amount"
            };
        case "Sort-Date":
            return{
                ...state,
                // sortBy:action.sortBy
                sortBy:"date"                
            };
        case "Start-Date":
            return{
                ...state,
                startDate:action.num
            };
        case "End-Date":
            return{
                ...state,
                endDate:action.num
            };
        default:
            return state;
    }
};
