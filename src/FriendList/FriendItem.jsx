import styles from './FriendList.module.css';
import propTypes from 'prop-types';

export const FriendItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={styles.item} id={id}>
      {isOnline ? (
        <span className={styles.status}></span>
      ) : (
        <>
          <span className={styles.status_offline}></span>
        </>
      )}
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string,
  isOnline: propTypes.bool,
  id: propTypes.number.isRequired,
};
