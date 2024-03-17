export const getItemsByIds = (items = [], allItems) => {
    console.log(items);

    if (allItems) {
        const itemsArray = [];
        for (const itemId of items) {
            for (const item of allItems) {
                if (item._id === itemId) {
                    itemsArray.push(item);
                    break;
                }
            }
        }
        return itemsArray;
    }
    return [];
};

export const getData = (id, arr) => {
    let newObj = {};
    if (arr) {
        for (const item of arr) {
            if (item._id === id) {
                newObj = { ...item };
                break;
            }
        }
        return newObj;
    }
    return [];
};
