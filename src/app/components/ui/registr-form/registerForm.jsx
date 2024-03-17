import React, { useEffect, useState } from 'react';
import { validator } from '../../../utils/validator';
import TextField from '../../common/form/textField';
import RadioField from '../../common/form/radioField';
import CheckBoxField from '../../common/form/checkBoxField';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthErrors, signUp } from '../../../store/users';
import { createAbility } from '../../../store/abilities';
import { nanoid } from 'nanoid';
import avatar from '../../../../assets/main/avatar.webp';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: '',
        password: '',
        abilities: '',
        attributes: '67rdca3eeb7f6fgeed47169',
        type: '67rdca3eeb7f6fgeed471731',
        sex: 'male',
        name: '',
        roles: [
            {
                value: '67rdca3eeb7f6fgeed47189',
                label: 'Роли неопределены',
            },
        ],
        avatar: avatar,
        skill: '',
        licence: false,
        description: '',
        force: '0',
        dexterity: '0',
        intelligence: '0',
        sword: '0',
        speed: '0',
        shield: '0',
        rate: 0,
        rateId: '',
        ratedUserId: ['1'],
        favorites: ['1'],
        bookmark: false,
    });
    const authErrors = useSelector(getAuthErrors());
    const [errors, setErrors] = useState({});
    const [isFocused, setIsFocused] = useState(false);

    const handleOnFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    useEffect(() => {
        if (isFocused) {
            validate();
        }
    }, [data]);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Электронная почта обязательна для заполнения',
            },
            isEmail: {
                message: 'Email введен некорректно',
            },
        },
        name: {
            isRequired: {
                message: 'Имя обязательно для заполнения',
            },
            min: {
                message: 'Имя должно состоять минимум из 3 символов',
                value: 3,
            },
            isText: {
                message: 'Поле не должно содержать специальные символы',
            },
        },
        password: {
            isRequired: {
                message: 'Пароль обязателен для заполнения',
            },
            isCapitalSymbol: {
                message: 'Пароль должен содержать хотя бы одну заглавную букву',
            },
            isContainDigit: {
                message: 'Пароль должен содержать хотя бы одно число',
            },
            min: {
                message: 'Пароль должен состоять минимум из 8 символов',
                value: 8,
            },
        },
        licence: {
            isRequired: {
                message:
                    'Вы не можете использовать наш сервис без подтверждения лицензионного соглашения',
            },
        },
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;

        const newAbility = {
            _id: nanoid(),
            skills: [
                {
                    title: 'Название способности.',
                    ability: 'Описание способности.',
                },
            ],
        };
        const newData = {
            ...data,
            abilities: newAbility._id,
            roles: data.roles.map((r) => r.value),
        };

        dispatch(createAbility(newAbility));
        dispatch(signUp(newData));
    };

    return (
        <form
            onSubmit={handleSubmit}
            onFocus={handleOnFocus}
            onBlur={handleBlur}
        >
            <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Имя"
                name="name"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <RadioField
                options={[
                    { name: 'Male', value: 'male' },
                    { name: 'Female', value: 'female' },
                    { name: 'Other', value: 'other' },
                ]}
                value={data.sex}
                name="sex"
                onChange={handleChange}
                label="Выберите ваш пол"
            />
            <CheckBoxField
                value={data.licence}
                onChange={handleChange}
                name="licence"
                error={errors.licence}
            >
                Подтвердить <a>лицензионное соглашение</a>
            </CheckBoxField>
            {authErrors && <p className="text-danger">{authErrors}</p>}
            <button
                className="btn btn-primary w-100 mx-auto"
                type="submit"
                disabled={!isValid}
            >
                Submit
            </button>
        </form>
    );
};

export default RegisterForm;
