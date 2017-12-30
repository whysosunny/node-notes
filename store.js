const fs = require('fs');


getCurrentStore = () => {
    return fs.readFileSync('./store.json');
};
var storage = JSON.parse(getCurrentStore());

readRecord = (id) => {
    var record = storage.filter(function(item) {
        return item.id === id;
    });
    return record[0];
};

writeToStore = (store) => {
    fs.writeFileSync('./store.json', JSON.stringify(store));
};

addToStore = (obj) => {
    obj.id = String(storage.length + 1);
    storage.push(obj);
    writeToStore(storage);
    return getCurrentStore();
};

removeFromStore = (title) => {
    var updatedStorage = storage.filter(function(obj) {
        return obj.title != title;
    });
    writeToStore(updatedStorage);
    return updatedStorage.length !== storage.length;
};

deleteStore = () => {
    storage = [];
    writeToStore(storage);
    return true;
};


replaceStore = (path) => {
    storage = JSON.parse(fs.readFileSync(path));
    writeToStore(storage);
    return true;
};



module.exports = {
    getCurrentStore,
    writeToStore,
    addToStore,
    removeFromStore,
    deleteStore,
    replaceStore,
    readRecord
}; 