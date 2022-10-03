import FakeAutenticado from '../../data/autenticacao/fakeautenticado';
import {
    useLocation,
    Navigate
} from 'react-router-dom';


const RequireLogin = (props) => {
    const location = useLocation();
    
    if(!FakeAutenticado()) {
        console.log({message: "usuario não possui credencias de acesso!"})
        return <Navigate to={'/login'} state={{ from: location }} />
    }
    
    return props.children;
}

export default RequireLogin;