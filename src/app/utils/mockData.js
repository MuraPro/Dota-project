import { useEffect, useState } from 'react';
import types from '../mockData/type.json';
import abilities from '../mockData/abilities.json';

import attribute from '../mockData/attribute.json';
import role from '../mockData/role.json';
import rolesInfo from '../mockData/rolesInfo.json';
import users from '../mockData/users.json';
import httpService from '../services/http.service';

const useMockData = () => {
    const statusConsts = {
        idle: 'Not Started',
        pending: 'In Process',
        successed: 'Ready',
        error: 'Error occurred',
    };
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(statusConsts.idle);
    const [progress, setProgress] = useState(0);
    const [count, setCount] = useState(0);
    const summaryCount =
        rolesInfo.length +
        types.length +
        abilities.length +
        users.length +
        attribute.length +
        role.length;

    const incrementCount = () => {
        setCount((prevState) => prevState + 1);
    };

    const updateProgress = () => {
        if (count !== 0 && status === statusConsts.idle) {
            setStatus(statusConsts.pending);
        }
        const newProgress = Math.floor((count / summaryCount) * 100);
        if (progress < newProgress) {
            setProgress(() => newProgress);
        }
        if (newProgress === 100) {
            setStatus(statusConsts.successed);
        }
    };

    useEffect(() => {
        updateProgress();
    }, [count]);

    async function initialize() {
        try {
            for (const role of rolesInfo) {
                await httpService.put('roles/' + role._id, role);
                incrementCount();
            }
            for (const type of types) {
                await httpService.put('type/' + type._id, type);
                incrementCount();
            }
            for (const user of users) {
                await httpService.put('user/' + user._id, user);
                incrementCount();
            }
            for (const attr of attribute) {
                await httpService.put('attribute/' + attr._id, attr);
                incrementCount();
            }
            for (const rol of role) {
                await httpService.put('role/' + rol._id, rol);
                incrementCount();
            }
            for (const ability of abilities) {
                await httpService.put('ability/' + ability._id, ability);
                incrementCount();
            }
        } catch (error) {
            setError(error);
            setStatus(statusConsts.error);
        }
    }

    return { error, initialize, progress, status };
};

export default useMockData;
