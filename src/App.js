import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactsBook from './Components/ContactsBook';
import AppBar from './Components/AppBar';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import MainView from './MainView/MainView';
import SignIn from './Components/LoginView';
import SignUp from './Components/RegisterView';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return isFetchingCurrentUser ? (
    <h1 style={{ textAlign: 'center' }}>Loading...</h1>
  ) : (
    <div>
      <AppBar />
      <ToastContainer />

      <Switch>
        {/* <Route exact path="/" component={MainView} /> */}
        {/* <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} /> */}
        {/* <Route path="/contacts" component={ContactsBook} /> */}

        {/* <PublicRoute exact path="/">
          <MainView />
        </PublicRoute> */}

        <PublicRoute path="/login" redirectTo="/contacts" restricted>
          <SignIn />
        </PublicRoute>
        <PublicRoute path="/register" redirectTo="/contacts" restricted>
          <SignUp />
        </PublicRoute>

        <PrivateRoute exact path="/contacts" redirectTo="/login">
          <ContactsBook />
        </PrivateRoute>
      </Switch>
    </div>
  );
}
