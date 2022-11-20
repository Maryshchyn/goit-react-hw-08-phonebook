import { useSelector } from 'react-redux';
import {
  selectUser,
  selectCurrent,
  selectLoggedIn,
} from 'redux/auth/authSelectors';

const useAuth = () => {
  const user = useSelector(selectUser);
  const current = useSelector(selectCurrent);
  const isLoggedIn = useSelector(selectLoggedIn);

  return { user, current, isLoggedIn };
};
export default useAuth;