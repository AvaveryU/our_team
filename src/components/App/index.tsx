import React, { FC, useEffect } from 'react';
import style from './index.module.css';
import Header from '../Header';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import TeamPage from '../../pages/team';
import { pathnames } from '../../utils/constants';
import NotFoundPage from '../../pages/notFound';

const App: FC = () => {
    const location = useLocation();

    return (
        <div className={style.app}>
            {(location.pathname !== pathnames.home && location.pathname !== pathnames.notFound) && <Header />}
            <Routes location={location}>
                <Route path={pathnames.home} element={<div>регистрация</div>}></Route>
                <Route path={pathnames.team} element={<TeamPage />}></Route>
                <Route path={pathnames.notFound} element={<NotFoundPage />} />
                <Route path="*" element={<Navigate to={pathnames.notFound} replace />} />
            </Routes>

        </div>
    );
}

export default App;
