import { Navigate } from 'react-router-dom';

export const ProtectedRoutes = ({children}) => {
    const token = localStorage.getItem('token');
    if(token){
        return children;
    }
    return <Navigate to="/" replace />
}

export const UnProtectedRoutes = ({children}) => {
    const token = localStorage.getItem('token');
    if(token){
        <Navigate to="/dashboard" replace />
    }
    return children;
}

export default ProtectedRoutes;