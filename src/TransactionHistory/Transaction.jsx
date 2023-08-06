import propTypes from 'prop-types';

export const Transaction = ({ id, type, amount, currency }) => {
  return (
    <tr id={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  id: propTypes.string.isRequired,
  amount: propTypes.string,
  type: propTypes.string,
  currency: propTypes.string,
};
