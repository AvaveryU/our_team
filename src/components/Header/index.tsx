import { FC } from 'react';
import style from './index.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../Button';
import { pathnames } from '../../utils/constants';

const Header: FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleExit = () => {
        navigate(pathnames.home);
    };

    const handleBackTeam = () => {
        navigate(pathnames.team);
    };

    return (
        <div className={style.header}>
            <h1 className={style.title}>Наша команда</h1>
            <p className={style.description}>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.</p>
            <Button className='button__exit' location={pathnames.home} text='Выход' onClick={handleExit} />
            {location.pathname !== pathnames.team &&
                <Button className='button__back' location={pathnames.team} text='Назад' onClick={handleBackTeam} />
            }
        </div>
    );
}

export default Header;
