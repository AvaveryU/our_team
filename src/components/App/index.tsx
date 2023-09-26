import { FC, useEffect } from 'react';
import style from './index.module.css';
import Header from '../Header';
import { Route, Routes, useLocation, Navigate, useMatch } from 'react-router-dom';
import TeamPage from '../../pages/team';
import { pathnames } from '../../utils/constants';
import NotFoundPage from '../../pages/notFound';
import UserProfilePage from '../../pages/userProfile';
import { getProfile } from '../../utils/middlewars';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import RegisterPage from '../../pages/register';
import ProtectedRoute from '../protectedRoute/protectedRoute';
import LoginPage from '../../pages/login';

const App: FC = () => {
    const location = useLocation();
    const { currentProfile } = useSelector((state: RootState) => state.users)
    let match = useMatch(pathnames.user);
    const token = localStorage.getItem("token");

    useEffect(() => {
        !currentProfile && match && getProfile(match?.params.id as string)
    }, []);

    return (
        <div className={style.app}>
            {(token !== null) && <Header currentProfile={currentProfile} minHeight={412} />}
            <Routes location={location}>
                <Route path={pathnames.home} element={
                    <ProtectedRoute isAuthenticated={token === null} path={pathnames.team}>
                        <RegisterPage />
                    </ProtectedRoute>}
                />
                <Route path={pathnames.login} element={
                    <ProtectedRoute isAuthenticated={token === null} path={pathnames.team}>
                        <LoginPage />
                    </ProtectedRoute>}
                />
                <Route path={pathnames.team} element={
                    <ProtectedRoute isAuthenticated={token !== null} >
                        <TeamPage />
                    </ProtectedRoute>}
                />
                <Route path={pathnames.team + '/:id'} element={
                    <ProtectedRoute isAuthenticated={token !== null}>
                        <UserProfilePage currentProfile={currentProfile} />
                    </ProtectedRoute>}
                />
                <Route path={pathnames.notFound} element={<NotFoundPage />} />
                <Route path="/our_team/*" element={<Navigate to={pathnames.notFound} replace />} />
            </Routes>

        </div>
    )
};

export default App;

