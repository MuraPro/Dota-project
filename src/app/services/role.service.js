import httpService from './http.service';
const roleEndpoint = 'role/';

const roleService = {
    fetchAll: async () => {
        const { data } = await httpService.get(roleEndpoint);
        return data;
    },
};
export default roleService;
