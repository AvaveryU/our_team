import { FC } from 'react';
import style from './index.module.css';
import { IUser } from '../../utils/types';
import { ReactComponent as PhoneIcon } from '../../images/phone.svg'
import { ReactComponent as EmailIcon } from '../../images/email.svg'

interface IUserProfilePage {
    currentProfile: IUser | null
}

const UserProfilePage: FC<IUserProfilePage> = ({ currentProfile }) => {

    return currentProfile && (
        <div className={style.page}>
            <p className={style.text}>Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты,
                как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру
                рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи,
                используя самые современные аналитические инструменты.<br></br><br></br>
                В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями.
                Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того,
                что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта
                у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".<br></br><br></br>
                Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность.
                Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте,
                а также инвестором других бизнес-проектов.<br></br><br></br>
                id: {currentProfile.id}
            </p>
            <div className={style.contacts}>
                <div className={style.contact}>
                    <div className={style.icon}><PhoneIcon /></div>
                    {/* в запросе к https://reqres.in/ нет информации о телефоне, поэтому хард-код */}
                    <p>+7 (954) 333-44-55</p>
                </div>
                <div className={style.contact}>
                    <div className={style.icon}><EmailIcon /></div>
                    <p>{currentProfile.email}</p>
                </div>
            </div>

        </div>
    );
}

export default UserProfilePage;
