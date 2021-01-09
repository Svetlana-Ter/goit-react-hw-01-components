import TransactionItem from './TransactionItem';
import styles from './Transactions.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistory({items = []}) {
	return (
		<table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>    
			<tbody>
				{items.map(item => (          
					<TransactionItem
						key={item.id}
						type={item.type}
						amount={item.amount}
						currency={ item.currency}/>
				))}
      </tbody>
    </table>
	)
}

TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
	}))
}