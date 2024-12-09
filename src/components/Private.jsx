import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
import Loading from './Loading';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({ children }) => {
    const { user, setLoading, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }
    if (user && user?.email) {
        return children
    }

    return (
        <Navigate state={location.pathname} replace={true} to={"/login"}></Navigate>
    );
};

export default Private;