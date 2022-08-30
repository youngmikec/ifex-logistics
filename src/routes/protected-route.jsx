import { Navigate } from 'react-router-dom';

export const ProtectedRoutes = ({children}) => {
    const expiresIn = localStorage.getItem('expiresIn');
    if(expiresIn){
        return children;
    }
    return <Navigate to="/" replace />
}

export const UnProtectedRoutes = ({children}) => {
    const token = localStorage.getItem('token');
    if(token){
        <Navigate to="/admin/dashboard" replace />
    }
    return children;
}

export default ProtectedRoutes;