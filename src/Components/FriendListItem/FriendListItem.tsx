import s from "./FriendListItem.module.css";

const friendOnline = (status: boolean): string => {
  if (status) {
    return s.online;
  } else {
    return s.offline;
  }
};

type TFriend = {
  isOnline: boolean;
  avatar: string;
  name: string;
};

const FriendListItem = ({ isOnline, avatar, name }: TFriend) => {
  return (
    <li className={s.item}>
      <span className={friendOnline(isOnline)}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
