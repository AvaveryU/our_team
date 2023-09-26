import React, { FC } from 'react';
import style from './index.module.css';
import { Link } from 'react-router-dom';
import cls from 'classnames';

interface IButton {
    className?: string;
    location: string;
    padding?: number;
    text?: string;
    onClick: () => void;
    children?: React.ReactNode
}

const Button: FC<IButton> = ({ className, location, padding, text, onClick, children }) => {

    return (
        <Link className={cls(style.button, className && style[className])} to={`${location}`} style={{ padding: padding }} onClick={onClick}>
            {text && <span className={style.button__text}>{text}</span>}
            {children}
        </Link>
    );
}

export default Button;
