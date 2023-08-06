import styles from './FriendList.module.css';
import propTypes from 'prop-types';
import { FriendItem } from './FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend__list}>
      {friends.map(({ avatar, isOnline, id, name }) => {
        return (
          <FriendItem
            key={id}
            avatar={avatar}
            isOnline={isOnline}
            id={id}
            name={name}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.array.isRequired,
};
