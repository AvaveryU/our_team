import { FC, FormEventHandler, useRef } from "react";
import styles from "./index.module.css";
import { useForm } from "../../hooks/useForm";
import { useSelector } from "../../store/store";
import { loginUser } from "../../utils/middlewars";
import { ReactComponent as EyeIcon } from '../../images/eye.svg'

const LoginPage: FC = () => {
    const {
        user: { email },
    } = useSelector((state) => state.users);

    const { values, setValues, handleChange, error } = useForm({ password: '', email: email });
    const refInput = useRef<HTMLInputElement>(null);

    const handleLogin: FormEventHandler = (event): void => {
        event.preventDefault();
        loginUser(values.password, values.email);
    };

    const onIconClick = (e: React.MouseEvent<HTMLDivElement>) => {
        let input = e.currentTarget.parentNode?.children[0] as HTMLInputElement;
        if (!input) return;
        input.type === "password" ? input.type = 'text' : input.type = 'password';
        setTimeout(() => input.focus(), 0);
    };

    return (
        <div className={styles.page}>
            <div className={styles.wrapper}>
                <form name={`form`} id={`login-form`} className={styles.form} onSubmit={handleLogin}>
                    <h2 className={styles.title}>Авторизация</h2>
                    <div className={styles.block}>
                        <label className={styles.label} htmlFor="email">Электронная почта</label>
                        <div className={styles.input}>
                            <input
                                onChange={handleChange}
                                value={values.email || ""}
                                type={"email"}
                                placeholder={"example@mail.ru"}
                                name={"email"}
                                onBlur={() => setValues(values)}
                            />
                        </div>
                        {error.email && values.email && <p className={styles.error}>{error.email}</p>}
                    </div>
                    <div className={styles.block}>
                        <label className={styles.label} htmlFor="password">Пароль</label>
                        <div className={styles.input} ref={refInput}>
                            <input
                                type={'password'}
                                onChange={handleChange}
                                value={values.password || ""}
                                name={"password"}
                                placeholder={"******"}
                                onBlur={() => setValues(values)}
                            />
                            <div className={styles.icon} onClick={onIconClick}>
                                <EyeIcon />
                            </div>
                        </div>
                        {error.password && values.password && <p className={styles.error}>{error.password}</p>}
                    </div>
                    <button
                        disabled={Object.values(error).some((i) => i.length !== 0) || Object.values(values).some((i) => i.length === 0)}
                        children="Войти"
                        className={styles.button}
                    />
                </form>
            </div>
        </div>
    );
};

export default LoginPage