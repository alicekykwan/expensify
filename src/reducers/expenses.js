

const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, 
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(( {id} ) => id !== action.id );
            // why does the first id work?? (as opposed to state.expense.id)
        case 'EDIT_EXPENSE':
            return state.map( (expense) => {
              if (expense.id === action.id) {
                return {
                  ...expense,
                  ...action.updates
                };
              } else {
                return expense;
              };

            });
        default:
          return state;
    }
};

