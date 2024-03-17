import React, { useEffect, useState } from 'react';
import TextField from '../../common/form/textField';
import SelectField from '../../common/form/selectField';
import RadioField from '../../common/form/radioField';
import MultiSelectField from '../../common/form/multiSelectField';
import BackHistoryButton from '../../common/back-button';
import { validator } from '../../../utils/validator';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserData, updateUser } from '../../../store/users';
import { getRoles, getRolesLoadingStatus } from '../../../store/roles';
import {
    getAttributes,
    getAttributesLoadingStatus,
} from '../../../store/attributes';
import TextAreaField from '../../common/form/textAreaField';
import { updateAbility } from '../../../store/abilities';
import { getTypes, getTypesLoadingStatus } from '../../../store/type';
import Loader from '../../common/loader';
import { getItemsByIds } from '../../../utils/transformData';

const EditUserPage = () => {
    const [hero, setHero] = useState({
        title: '',
        ability: '',
    });
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const [isFocused, setIsFocused] = useState(false);
    const currentUser = useSelector(getCurrentUserData());
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const rolesLoading = useSelector(getRolesLoadingStatus());
    const roles = useSelector(getRoles());
    const rolesList = roles.map((r) => ({
        label: r.name,
        value: r._id,
    }));

    const types = useSelector(getTypes());
    const typeLoading = useSelector(getTypesLoadingStatus());
    const typesList = types.map((t) => ({
        label: t.name,
        value: t._id,
    }));

    const attributes = useSelector(getAttributes());
    const attributeLoading = useSelector(getAttributesLoadingStatus());
    const attributesList = attributes.map((a) => ({
        label: a.name,
        value: a._id,
    }));

    const handleOnFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        if (data.roles.length === 0) {
            data.roles = [
                {
                    value: '67rdca3eeb7f6fgeed47189',
                    label: 'Роли неопределены',
                },
            ];
        }
        dispatch(
            updateUser({
                ...data,
                roles: data.roles.map((r) => r.value),
            })
        );
        const newAbility = {
            _id: data.abilities,
            skills: [{ title: hero.title, ability: hero.ability }],
        };
        dispatch(updateAbility(newAbility, newAbility._id));
    };

    const transformData = (data) => {
        const result = getItemsByIds(data).map((role) => ({
            label: role.name,
            value: role._id,
        }));
        return result;
    };

    useEffect(() => {
        if (
            !typeLoading &&
            !attributeLoading &&
            !rolesLoading &&
            currentUser &&
            !data
        ) {
            setData({
                ...currentUser,
                roles: transformData(currentUser.roles),
            });
        }
    }, [typeLoading, attributeLoading, rolesLoading, currentUser, data]);

    useEffect(() => {
        if (data && isLoading) {
            setIsLoading(false);
        }
    }, [data]);
    console.log(data);

    useEffect(() => {
        if (isFocused) {
            validate();
        }
    }, [data, hero]);

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
                message: 'Введите ваше имя',
            },
            isText: {
                message: 'Поле не должно содержать специальные символы',
            },
        },
        type: {
            isRequired: {
                message: 'Выберите тип атаки',
            },
        },
        avatar: {
            isUrl: {
                message: 'Введите корректную ссылку',
            },
        },
        skill: {
            isUrl: {
                message: 'Введите корректную ссылку',
            },
        },
        description: {
            isText: {
                message: 'Поле не должно содержать специальные символы',
            },
        },
        title: {
            isText: {
                message: 'Поле не должно содержать специальные символы',
            },
        },
        ability: {
            isText: {
                message: 'Поле не должно содержать специальные символы',
            },
        },
    };

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };

    const handleChangeAbility = (target) => {
        setHero((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };
    const validate = () => {
        const errorsObj = { ...data, ...hero };
        const errors = validator(errorsObj, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    return (
        <div className="container mt-5">
            <BackHistoryButton />
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {!isLoading &&
                    !attributeLoading &&
                    !typeLoading &&
                    !rolesLoading ? (
                        <form
                            onSubmit={handleSubmit}
                            onFocus={handleOnFocus}
                            onBlur={handleBlur}
                        >
                            <TextField
                                label="Имя"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Ссылка на аватар для вашего героя"
                                name="avatar"
                                value={data.avatar}
                                onChange={handleChange}
                                error={errors.avatar}
                            />
                            <TextField
                                label="Ссылка изображение способности"
                                name="skill"
                                value={data.skill}
                                onChange={handleChange}
                                error={errors.skill}
                            />
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <TextAreaField
                                value={data.description}
                                onChange={handleChange}
                                name="description"
                                label="Описание вашего героя"
                                error={errors.description}
                            />
                            <TextField
                                label="Название способности героя"
                                name="title"
                                value={hero.title}
                                onChange={handleChangeAbility}
                                error={errors.title}
                            />
                            <TextAreaField
                                value={hero.ability}
                                onChange={handleChangeAbility}
                                name="ability"
                                label="Описание способности"
                                error={errors.ability}
                            />
                            <SelectField
                                label="Выбери атрибут героя"
                                defaultOption="Choose..."
                                options={attributesList}
                                name="attributes"
                                onChange={handleChange}
                                value={data.attributes}
                                error={errors.attributes}
                            />
                            <SelectField
                                label="Выбери тип атаки героя"
                                defaultOption="Choose..."
                                options={typesList}
                                name="type"
                                onChange={handleChange}
                                value={data.type}
                                error={errors.type}
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
                            <MultiSelectField
                                defaultValue={data.roles}
                                options={rolesList}
                                onChange={handleChange}
                                name="roles"
                                label="Выберите ваши качества"
                            />
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="btn btn-primary w-100 mx-auto"
                            >
                                Обновить
                            </button>
                        </form>
                    ) : (
                        <Loader />
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditUserPage;
