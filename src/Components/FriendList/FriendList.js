import React from 'react';
import PropTypes from 'prop-types';
import s from "./FriendList.module.css";

function friendOnline(status) {
  if (status) {
    return s.online;
  } else {
    return s.offline;
  }
}

const FriendList = ({ friends }) => (
    <ul className={s.friendList}>
        
        {friends.map(friend => <li key={friend.id} className={s.item}>
            <span className={friendOnline(friend.isOnline)} ></span>
            <img className={s.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={s.name}>{friend.name}</p>
        </li>)}
    </ul>
);

FriendList.prototype = {
  friends:PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    id:PropTypes.number.isRequired,
  }))
}

export default FriendList;