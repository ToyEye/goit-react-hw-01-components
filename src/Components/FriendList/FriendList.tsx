import FriendListItem from "../FriendListItem";

import s from "./FriendList.module.css";

type TFriend = {
  isOnline: boolean;
  avatar: string;
  name: string;
  id: number;
};

type FriendListProps = {
  friends: TFriend[];
};

const FriendList = ({ friends }: FriendListProps) => (
  <ul className={s.friendList}>
    {friends.map(({ id, isOnline, avatar, name }: TFriend) => (
      <FriendListItem
        key={id}
        isOnline={isOnline}
        avatar={avatar}
        name={name}
      />
    ))}
  </ul>
);

export default FriendList;
