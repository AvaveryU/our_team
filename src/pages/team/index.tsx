import { FC, useLayoutEffect } from 'react';
import style from './index.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { getProfile, getUsersData } from '../../utils/middlewars';
import Button from '../../components/Button';
import { countPages } from '../../utils/constants';
import next from '../../images/next.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { pathnames } from '../../utils/constants';
import { ReactComponent as LikeIcon } from '../../images/like.svg'

const TeamPage: FC = () => {
    const { users, page, totalPages } = useSelector((state: RootState) => state.users)
    const location = useLocation();
    let navigate = useNavigate();

    useLayoutEffect((() => {
        users.length < 8 && getUsersData();
    }), []);

    const handleNextUsers = (count: number) => {
        if (totalPages < page + count) return
        getUsersData(page + count)
    }

    const onOpenProfile = (e: React.MouseEvent<HTMLAnchorElement>, userId: number) => {
        if ((e.target as SVGSVGElement).dataset.id === `like_button_${userId}` || (e.target as Element).hasAttribute('d')) return
        e.preventDefault();
        getProfile(userId);
        navigate(`${location.pathname}/${userId}`);
    };

    const handleSetLike = (e: React.MouseEvent<SVGSVGElement>) => {
        e.preventDefault();
        const svgElement = (e.target as HTMLElement).closest(`#like_button`)
        let fillStyle = (svgElement as HTMLElement).style;
        if (fillStyle.fill === '') fillStyle.fill = 'var(--primaryViolet)';
        else fillStyle.fill = '';
    }

    return (
        <div className={style.page}>
            <div className={style.team}>
                {users.map((user) => {
                    return (
                        <Link
                            to={{ pathname: `${location.pathname}/${user.id}` }}
                            key={user.id}
                            className={style.user}
                            onClick={(e) => onOpenProfile(e, user.id)}>
                            <div className={style.avatar}>
                                <img className={style.image} src={user.avatar} alt={'Фотография'} />
                            </div>
                            <p className={style.name}>{user.first_name} {user.last_name}</p>
                            <LikeIcon className={style.like} id={`like_button`} data-id={`like_button_${user.id}`} onClick={(e) => handleSetLike(e)} />
                        </Link>
                    )
                })
                }
            </div>
            {totalPages === page + countPages &&
                <div className={style.button}>
                    <Button location={pathnames.team} text='Показать еще' className='button__next' onClick={() => handleNextUsers(countPages)} >
                        <div className={style.button__image}><img src={next} alt={'стрелка'} /></div>
                    </Button>
                </div>}
        </div>
    );
}

export default TeamPage;
