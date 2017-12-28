import React from 'react';
import { NavLink } from 'react-router-dom';


export const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
    <div>
        <NavLink to={`/edit/${id}`} >
            <h1>{description}</h1>
        </NavLink>
        <p>amount: {amount} - createdAt: {createdAt}</p>
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