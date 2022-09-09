import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getIsRefreshingUser);
  const user = useSelector(authSelectors.getUser);

  return { isLoggedIn, isRefreshing, user };
};
