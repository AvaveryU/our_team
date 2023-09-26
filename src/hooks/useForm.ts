import { ChangeEvent, useState } from "react";
import { withoutSpaceReg, emailReg, loginReg, textError } from "../utils/constants";

interface IValuesInputForm {
    [name: string]: string;
}

export function useForm(inputValues: IValuesInputForm) {
    const [values, setValues] = useState<IValuesInputForm>(inputValues);
    const [error, setError] = useState<IValuesInputForm>({});

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        const text = value.replace(withoutSpaceReg, '');
        let result: RegExpMatchArray | null

        setValues({ ...values, [name]: text });

        result = name === 'email' ? text.match(emailReg) : text.match(loginReg);

        const isValidate = result && result[0].length >= 3 && result[0].length <= 30;
        if (!isValidate) {
            setError({ ...error, [name]: textError });
        } else {
            const newError = { ...error };
            delete newError[name];
            setError(newError);
        }
    };
    return { values, setValues, handleChange, error };
}