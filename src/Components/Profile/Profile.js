import React from 'react';
import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ username, avatar, tag, location, stats }) => (
  <div className={s.profile}>
    <div className="description">
      <img
        src={avatar}
        alt={username}
        className={s.avatar}
      />
      <p className={s.name}>{username}</p>
      <p className={s.text}>@{tag}</p>
      <p className={s.text}>{location}</p>
    </div>

    <ul className={s.stats}>
      <li className={s.box}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{stats.followers}</span>
      </li>
      <li className={s.box}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{stats.views}</span>
      </li>
      <li className={s.box}>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes:PropTypes.number,
}


export default Profile;