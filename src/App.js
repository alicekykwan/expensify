import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'

const store = configureStore();

store.dispatch(addExpense({description:'Water Bill', amount: 4500}));
store.dispatch(addExpense({description:'Gas Bill', createdAt:1000, amount: 20000}));
store.dispatch(addExpense({description:'Rent', amount: 109500}));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);  
console.log(visibleExpenses);

class App extends React.Component{

  writeSomeCode() {
    //console.log('hahah');
  }
  render() {
    this.writeSomeCode();
    return jsx
  }
}

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
  
);

export default App;
