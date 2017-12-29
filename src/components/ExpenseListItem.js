import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'

export const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
    <div>
        <NavLink to={`/edit/${id}`} >
            <h1>{description}</h1>
        </NavLink>
        <p>
        amount:{numeral(amount/100).format('$0,0.00')} 
        -
        createdAt:{moment(createdAt).format("MMMM Do, YYYY")}</p>
    </div>
);

export default (ExpenseListItem);
// const ExpenseListItem=({description,amount,createdAt})=>(
//     <div>
//         <h1>{description}</h1>
//         <p>amount: {amount} - createdAt: {createdAt}</p>
//     </div>
// );
// export default ExpenseListItem;