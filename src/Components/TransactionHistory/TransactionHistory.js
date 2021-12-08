import React from "react";
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css'
const TransactionHistory = ({ items }) => (
    
    <table className={s.transactionHistory}>
        <thead className={s.header}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item => 
                <tr key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            )}
        </tbody>
    </table>
);

TransactionHistory.prototype = {
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
}

export default TransactionHistory;