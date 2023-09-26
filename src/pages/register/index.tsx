import { FC, FormEventHandler, useRef } from "react";
import styles from "./index.module.css";
import { textError } from "../../utils/constants";
import { useForm } from "../../hooks/useForm";
import { useSelector } from "../../store/store";
import { postNewUser } from "../../utils/middlewars";
import { ReactComponent as EyeIcon } from '../../images/eye.svg'

const RegisterPage: FC = () => {
    const {
        user: { email },
    } = useSelector((state) => state.users);

    const { values, setValues, handleChange, error } = useForm({ password: '', email: email, name: '', passwordConfirmation: '' });

    const refInput = useRef<HTMLInputElement>(null);
    const refInputRepeat = useRef<HTMLInputElement>(null);

    const handleRegisterUser: FormEventHandler = (event): void => {
        event.preventDefault();
        postNewUser(values.password, values.name, values.email);
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
                <form name={`form`} id={`register-form`} className={styles.form} onSubmit={handleRegisterUser}>
                    <h2 className={styles.title}>Регистрация</h2>
                    <div className={styles.block}>
                        <label className={styles.label} htmlFor="name">Имя</label>
                        <div className={styles.input}>
                            <input
                                onChange={handleChange}
                                value={values.name || ""}
                                type={"text"}
                                placeholder={"Артур"}
                                name={"name"}
                                onBlur={() => setValues(values)}
                            />
                        </div>
                        {error.name && values.name && <p className={styles.error}>{error.name}</p>}
                    </div>
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
                    <div className={styles.block}>
                        <label className={styles.label} htmlFor="passwordConfirmation">Подтвердите пароль</label>
                        <div className={styles.input} ref={refInputRepeat}>
                            <input
                                type={'password'}
                                onChange={handleChange}
                                value={values.passwordConfirmation || ""}
                                name={"passwordConfirmation"}
                                placeholder={"******"}
                                onBlur={() => setValues(values)}
                            />
                            <div className={styles.icon} onClick={onIconClick}>
                                <EyeIcon />
                            </div>
                        </div>
                        {values.password !== values.passwordConfirmation && <p className={styles.error}>{textError}</p>}
                    </div>
                    <button
                        disabled={Object.values(error).some((i) => i.length !== 0) || Object.values(values).some((i) => i.length === 0) || values.password !== values.passwordConfirmation}
                        children="Зарегистрироваться"
                        className={styles.button}
                    />
                </form>
            </div>
        </div>
    );
};

export default RegisterPage