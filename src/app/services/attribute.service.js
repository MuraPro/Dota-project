import httpService from './http.service';
const attributeEndpoint = 'attribute/';

const attributeService = {
    fetchAll: async () => {
        const { data } = await httpService.get(attributeEndpoint);
        return data;
    },
};
export default attributeService;
