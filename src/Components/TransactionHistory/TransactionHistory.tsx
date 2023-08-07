import s from "./TransactionHistory.module.css";

type TTransaction = {
  type: string;
  amount: string;
  currency: string;
  id: string;
};

type TProps = {
  items: TTransaction[];
};

const TransactionHistory = ({ items }: TProps) => (
  <table className={s.transactionHistory}>
    <thead className={s.header}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;
