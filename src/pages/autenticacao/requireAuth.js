// import fakeAuthenticated from './data/autenticacao/auth';
import fakeAuthenticated from '../../data/autenticacao/auth';

const RequireAuth = ({ children }) => {
    let location = useLocation();
  
    if(!fakeAuthenticated()) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  
}

export default RequireAuth;