import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import s from './Friends.module.css';

export default function FriendsList({friends}) {
	return (
		<ul className={s.friendsList}>
			{friends.map(friend => (
				<li key={friend.id}>
					<FriendListItem
						avatar={friend.avatar}
						name={friend.name}
						isOnline={ friend.isOnline}/>
        </li>
			))}
    </ul>
	)
}

FriendsList.propTypes = {
	friends: PropTypes.arrayOf(PropTypes.shape({	
		id: PropTypes.number.isRequired,		
	}))
}