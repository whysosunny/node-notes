const store = require('./store');

var addNote = (title, body) => {

    store.addToStore({
        title: title,
        body: body
    });


    console.log('Adding: \n' + title + '\n' + body);
};

var removeNote = (title) => {
    if(store.removeFromStore(title)) {
        console.log(`Removed note ${title}`);
    } else {
        console.log('Error');
    }
};

var listNotes = () => {
    var arr = JSON.parse(store.getCurrentStore());
    if(arr.length > 0) {
        console.log(`You have ${arr.length} Notes: `);
        arr.forEach(function(item) {
            console.log((item.id) + '. ' + item.title);
        });
    } else {
        console.log("No notes found!")
    }
};

var replaceStore = (path) => {
    if(store.replaceStore(path)) {
        console.log(`Successfully updated storage from ${path}`);
    } else {
        console.log(`Error`);
    }
};

var deleteAll = () => {
    console.log(store.deleteStore() ? "Deleted All Notes" : "Error!");
};

var readNote = (id) => {

    const note = store.readRecord(String(id));
    console.log(note.id + '. ' + note.title);
    console.log(note.body);
};

module.exports = {
    addNote,
    listNotes,
    readNote,
    removeNote,
    deleteAll,
    replaceStore
};