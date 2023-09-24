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

const App: FC = () => {
    const location = useLocation();
    const { currentProfile } = useSelector((state: RootState) => state.users)
    let match = useMatch(pathnames.user);

    useEffect(() => {
        !currentProfile && match && getProfile(match?.params.id as string)
    }, []);

    return (
        <div className={style.app}>
            {(location.pathname !== pathnames.home && location.pathname !== pathnames.notFound) && <Header currentProfile={currentProfile} minHeight={412} />}
            <Routes location={location}>
                <Route path={pathnames.home} element={<div>регистрация</div>} />
                <Route path={pathnames.team} element={<TeamPage />} />
                <Route path={pathnames.team + '/:id'} element={<UserProfilePage currentProfile={currentProfile} />} />
                <Route path={pathnames.notFound} element={<NotFoundPage />} />
                <Route path="*" element={<Navigate to={pathnames.notFound} replace />} />
            </Routes>

        </div>
    )
};

export default App;
