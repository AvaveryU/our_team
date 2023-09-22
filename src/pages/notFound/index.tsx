import { FC } from "react";
import { useNavigate } from "react-router";
import styles from "./index.module.css";
import { pathnames } from "../../utils/constants";

const NotFoundPage: FC = () => {
    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate(pathnames.home);
    };

    return (
        <div className={styles.page}>
            <p className={styles.text}>Такой страницы не существует!</p>
            <button className={styles.button} children="Вернуться на главную страницу" onClick={handleBackHome} />
        </div>
    );
};

export default NotFoundPage