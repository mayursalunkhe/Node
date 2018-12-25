console.log('Starting app..');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note Created');
        console.log('----');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else{
        console.log('Duplicate note exsist, note not added');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else{
    console.log('command not recognised');
}




// lodash function demo
// var filterArray = _.uniq(['Mike', 1,2,1,4,3,6,2,'Rabbit', 'Mike']);
// console.log(filterArray);

// Write file
// fs.appendFile('greetings.txt',`Hello ${user.username} You are ${notes.age}!`, function(err){
//     if(err){
//         console.log('Unable to write to file');
//     }
// });