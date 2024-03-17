import httpService from './http.service';
const attributeEndpoint = 'ability/';

const abilitiesService = {
    fetchAll: async () => {
        const { data } = await httpService.get(attributeEndpoint);
        return data;
    },
    updateAbility: async (payload, id) => {
        const { data } = await httpService.patch(
            attributeEndpoint + id,
            payload
        );
        return data;
    },
    createAbility: async (payload) => {
        const { data } = await httpService.put(
            attributeEndpoint + payload._id,
            payload
        );
        return data;
    },
};
export default abilitiesService;
