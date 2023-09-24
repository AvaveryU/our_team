import { FC } from 'react';
import style from './index.module.css';
import { useMatch, useNavigate } from 'react-router-dom';
import Button from '../Button';
import { pathnames } from '../../utils/constants';
import { IUser } from '../../utils/types';
import { UsersActions } from '../../store/reducers/users';
import { store } from '../../store/store';

interface IHeader {
    currentProfile: IUser | null
    minHeight?: number
}

const Header: FC<IHeader> = ({ currentProfile, minHeight }) => {
    const navigate = useNavigate();
    let match = useMatch("/team/:id");
    const hasStyle = window.innerWidth <= 768 && match && minHeight;

    const handleExit = (path: string) => {
        store.dispatch<UsersActions>({ type: "SET_PROFILE", currentProfile: null });
        navigate(path);
    };

    return (
        <div className={style.header} style={hasStyle ? { minHeight: `${minHeight}px` } : {}}>
            {currentProfile && match ?
                <div className={style.profile}>
                    <div className={style.profile__image}><img src={currentProfile.avatar} alt={'аватар'} /></div>
                    <h1 className={style.profile__title}>{currentProfile.first_name} {currentProfile.last_name}</h1>
                    <p className={style.subtitle}>{currentProfile.last_name}</p>
                </div>
                :
                <>
                    <h1 className={style.title}>Наша команда</h1>
                    <p className={style.description}>Это опытные специалисты, хорошо разбирающиеся во всех задачах,
                        которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.</p>
                </>
            }
            <Button
                className='button__exit'
                location={pathnames.home}
                text='Выход'
                onClick={() => handleExit(pathnames.home)}
            />
            {currentProfile &&
                <Button
                    className='button__back'
                    location={pathnames.team}
                    text='Назад'
                    onClick={() => handleExit(pathnames.team)}
                />
            }
        </div>
    );
}

export default Header;
