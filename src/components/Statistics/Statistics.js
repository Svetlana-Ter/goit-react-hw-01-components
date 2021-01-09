import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({ title = '', stats = []}) {
	return (
		<section className={styles.statistics}>
			{title && <h2 className={styles.title}>{title}</h2>}
			<ul className={styles.statList}>
				{stats.map(stat => 
					<li key={stat.id} className={styles.item} style={{backgroundColor: stat.color}}>
						<span className={styles.label}>{stat.label}</span>
						<span className={styles.percentage}>{stat.percentage}%</span>
					</li>)
				}     
      </ul>
    </section>
  )
}

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string,
		percentage: PropTypes.number,
		color: PropTypes.string,
		id: PropTypes.string.isRequired
	}))
}