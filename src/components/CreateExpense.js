import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const CreateExpense = (props) => (
    <div>
    <h1>Create Expense Component</h1>
    <ExpenseForm 
        onSubmit={(expense)=>{
            console.log(expense);
            props.dispatch(addExpense(expense));
            props.history.push('/');
        }}
    />
    </div>
);


export default connect()(CreateExpense);