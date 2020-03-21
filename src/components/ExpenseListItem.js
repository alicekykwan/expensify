import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = (props) => {
    const address = '/edit/' + props.id;
    return(<div>
        <Link to={address} ><h3>{props.description}</h3></Link>
        {/* or: <Link to={`/edit/${id}`} */}
        <p>${props.amount}, Date: {props.createdAt} </p>
        
    </div>)
};


export default ExpenseListItem;