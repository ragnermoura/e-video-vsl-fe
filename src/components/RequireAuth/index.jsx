import {Navigate, useLocation} from 'react-router-dom'
import { useAuth } from '../../context/authProvider'

export const RequireAuth = ({children}) => {
    const expirationTime = sessionStorage.getItem('expirationTime');
    const auth = useAuth()
    const location = useLocation()
    if(!auth.user || (expirationTime && new Date().getTime() > parseInt(expirationTime, 10)) ) {
        return <Navigate to={'/'} state={{path: location.pathname}}/>
    }

    return children
}