// var obj = {
//     name: 'Mayur'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Mayur", "Age": 26}';
// var person = JSON.parse(personString);
// console.log(person);
// console.log(typeof person);


const fs = require('fs');

var orignalNote = {
    title: 'Some title',
    body: 'Some body'
};
// orignalNoteString
var orignalNoteString = JSON.stringify(orignalNote);
fs.writeFileSync('notes.json', orignalNoteString);

var noteString = fs.readFileSync('notes.json');
// note
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);