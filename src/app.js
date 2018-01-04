
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter , {history}  from './routers/AppRouter';
import selectExpenses from './selectors/expenses';
import { startSetExpense } from './actions/expenses';
import expensesReducer from './reducers/expenses';
import { login,logout } from './actions/auth';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import "./firebase/firebase";
import {firebase} from './firebase/firebase';
// import './playground/promisses';

const store = configureStore();

let hasRendered=false;
const renderApp=()=>{

    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered=true;        
    };
};


// store.subscribe(()=>{
//     const state= store.getState();
//     const visibleExpenses=selectExpenses(state.expenses,state.filters);
//     console.log(visibleExpenses);
// });

// store.dispatch(addExpense({description:"water bill",amount:400,createdAt:-2000}));
// store.dispatch(addExpense({description:"gas bill",amount:200,createdAt:-3000}));
// store.dispatch(addExpense({description:"gas bill",amount:300,createdAt:5000}));
// store.dispatch(setTextFilter("water"));
//  setTimeout( 
//    ()=> store.dispatch(setTextFilter("bill")),3000);
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpense()).then(() => {
            renderApp();
        });
        if(history.location.pathname==='/'){
           history.push('/dashboard'); 
        }
    }else{
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});