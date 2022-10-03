import { Link } from 'react-router-dom';

export const LinksNavigation = () => (
    <>
        <ul>
            <li> <Link to="/login" >Login Page</Link> </li>
            <li> <Link to="/protected" >Page Protected</Link> </li>
        </ul>
    </>
);