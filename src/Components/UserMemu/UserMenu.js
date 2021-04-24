import { useSelector, useDispatch } from 'react-redux';
// import authSelectors from '../../redux/auth/auth-selectors';
import defaultAvatar from './default-avatar.jpg';
// import authOperations from '../../redux/auth/auth-operations';
import { authSelectors, authOperations } from '../../redux/auth';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Wellcome, {name}!</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Sign out
      </button>
    </div>
  );
}
