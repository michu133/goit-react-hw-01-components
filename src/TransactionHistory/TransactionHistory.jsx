import styles from './TransactionHistory.module.css';
import propTypes from 'prop-types';
import { Transaction } from './Transaction';

export const TransactionHistory = ({ transaction }) => {
  return (
    <table className={styles.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transaction.map(({ id, currency, amount, type }) => {
          return (
            <Transaction
              key={id}
              id={id}
              type={type}
              amount={amount}
              currency={currency}
            ></Transaction>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transaction: propTypes.array.isRequired,
};
