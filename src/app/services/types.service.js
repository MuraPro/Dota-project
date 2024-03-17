import httpService from './http.service';
const typeEndpoint = 'type/';

const typesService = {
    fetchAll: async () => {
        const { data } = await httpService.get(typeEndpoint);
        return data;
    },
    updateType: async (payload, id) => {
        const { data } = await httpService.patch(typeEndpoint + id, payload);
        return data;
    },
    createType: async (payload) => {
        const { data } = await httpService.put(
            typeEndpoint + payload._id,
            payload
        );
        return data;
    },
};
export default typesService;
