import { FC } from "react";
import { Navigate, RouteProps } from 'react-router-dom';
import { pathnames } from "../../utils/constants";

type IProtectedRouteProps = RouteProps & {
    isAuthenticated: boolean;
    children: JSX.Element;
    path?: string;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ isAuthenticated, children, path }) => {
    if (!isAuthenticated) {
        return <Navigate to={path ?? pathnames.home} replace />;
    }
    return children;
};

export default ProtectedRoute;
