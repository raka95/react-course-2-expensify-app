import {createStore,combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

//store creation
export default ()=>{
    const store=createStore(
        combineReducers({
            expenses:expensesReducer,
            filters:filtersReducer
        }),
        //this is for redux developer tool extention:
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};

