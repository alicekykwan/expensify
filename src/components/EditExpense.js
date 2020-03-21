import React from 'react';
import { connect } from 'react-redux'; 
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpense = (props) => {
    return (
    <div>
      <ExpenseForm 
        expense = {props.expense}
        onSubmit = {(expense) => {
          props.dispatch(editExpense(props.match.params.id, expense));
          props.history.push('/');
          // console.log('updated', props.expense.id, expense.id, props.match.params.id, expense); ask nono why 2nd & 3rd different
        }}
      />
      <button onClick={()=>{
            props.dispatch(removeExpense({ id: props.expense.id }));
            props.history.push('/'); 
            
        }}>Remove</button>
    
    

    {/* Edit Expense Component with id: {props.match.params.id} */}

    </div>
  );
}

const mapStatetoProps = (state, props) => {
  return {
    expense: state.expenses.find( (expense) => expense.id === props.match.params.id)
  }
};

export default connect(mapStatetoProps)(EditExpense);