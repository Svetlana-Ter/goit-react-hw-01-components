import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';

export default function FriendsList({ friends = [] }) {
	return (
		<ul className={styles.friendsList}>
			{friends.map(friend => (
				<FriendListItem
					key={friend.id}
					avatar={friend.avatar}
					name={friend.name}
					isOnline={friend.isOnline}
				/>
			))}
		</ul>
	);
}

FriendsList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
		})
	),
};
