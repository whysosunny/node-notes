const yargs = require('yargs').argv;
const notes = require('./notes');

var operation = yargs._[0];


switch (operation) {
    case undefined:
        console.log("Welcome to Node-Notes: ");
        var arr = ['list', 'add --title="" --body=""', 'read --id=""', 'remove --index=""', 'delete-all', 'replace-store --path=""'];
        console.log('List of operations available:');
        arr.forEach(function (item, index) {
            console.log(`${index + 1}. ${item}`);
        });
        break;
    case 'add':
        if (yargs.title && yargs.body) {
            notes.addNote(yargs.title, yargs.body);
        }
        else {
            console.log("Use both --title and --body to add a note.")
        }
        break;
    case 'list':
        notes.listNotes();
        break;
    case 'read':
        if (yargs.id) {
            notes.readNote(yargs.id)
        } else {
            console.log("Use --id to read a note. List notes using 'list'")
        }
        break;
    case 'remove':
        if (yargs.title) {
            notes.removeNote(yargs.title);
        }
        else {
            console.log("Use --title to remove a note.")
        }
        break;
    case 'delete-all':
        notes.deleteAll();
        break;
    case 'replace-store':
        notes.replaceStore(yargs.path);
        break;
    default:
        console.log('Operation not recognized');
}