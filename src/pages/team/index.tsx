import { FC, useEffect } from 'react';
import style from './index.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { getUsersData } from '../../utils/middlewars';
import Button from '../../components/Button';
import { countPages } from '../../utils/constants';
import next from '../../images/next.svg'

const TeamPage: FC = () => {
    const { users, page, totalPages } = useSelector((state: RootState) => state.users)

    useEffect((() => {
        getUsersData();
    }), []);

    const handleNextUsers = (count: number) => {
        if (totalPages < page + count) return
        getUsersData(page + count)
    }

    return (
        <div className={style.page}>
            <div className={style.team}>{users.map((user) => {
                return (
                    <div key={user.id} className={style.user}>
                        <div className={style.avatar}>
                            <img className={style.image} src={user.avatar} alt={'Фотография'} />
                        </div>
                        <p className={style.name}>{user.first_name} {user.last_name}</p>
                        <button className={style.like}></button>
                    </div>
                )
            })}</div>
            {totalPages === page + countPages &&
                <div className={style.button}>
                    <Button location='/team' text='Показать еще' className='button__next' onClick={() => handleNextUsers(countPages)} >
                        <div className={style.button__image}><img src={next} alt={'стрелка'} /></div>
                    </Button>
                </div>}
        </div>
    );
}

export default TeamPage;
