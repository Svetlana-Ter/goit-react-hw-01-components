import PropTypes from 'prop-types';
import s from './Friends.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  const bg = isOnline ? 'green' : 'red';
  return (	
    <div className={s.item}>
        <span className={s.status} style={{backgroundColor: bg}}></span>
        <img className={s.avatar} src={avatar} alt={name} width="60" />
        <p className={s.name}>{name}</p>
    </div>     
	)
}

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
}