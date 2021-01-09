import PropTypes from 'prop-types';
import styles from './Friends.module.css';

export default function FriendListItem({ avatar = 'image not found', name = '', isOnline = false }) {
  const background = isOnline ? 'green' : 'red';
  return (	
    <li className={styles.item}>
      <span className={styles.status} style={{backgroundColor: background}}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="60" />
      <p className={styles.name}>{name}</p>
    </li>     
	)
}

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
}