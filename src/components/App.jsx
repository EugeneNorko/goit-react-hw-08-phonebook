import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import operations from 'redux/auth/AuthOperations';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const HomeView = lazy(() => import('../views/HomeView'));
const LoginView = lazy(() => import('../views/LoginView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const ContactView = lazy(() => import('../views/ContactView'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Loading...</h1>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PublicRoute component={<HomeView />} />} />
        <Route
          path="/register"
          element={
            <PublicRoute
              restricted
              redirectTo="/contacts"
              component={<RegisterView />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute
              restricted
              redirectTo="/contacts"
              component={<LoginView />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactView />} />
          }
        />
      </Route>
    </Routes>
  );
};
