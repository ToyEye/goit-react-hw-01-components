import s from "./Profile.module.css";

type TStats = {
  followers: number;
  views: number;
  likes: number;
};

type TUser = {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: TStats;
};

const Profile = ({ username, avatar, tag, location, stats }: TUser) => (
  <div className={s.profile}>
    <div className="description">
      <img src={avatar} alt={username} className={s.avatar} />
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

export default Profile;
