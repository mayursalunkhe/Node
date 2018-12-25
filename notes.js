console.log('Starting notes.js....');

//module.exports.age = 25;

const fs = require('fs');

var fetchNotes = () => {
    try { // If file not exsist it gives error
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) =>{
    var notes = fetchNotes();
    var note = {
        title,
        body
    };



    var duplicateNotes = notes.filter((note) => note.title === title);

    // Check it note with same title exsists
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }

};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Get Note: ', title);
}

var removeNote = (title) => {
    console.log('Remove note: ', title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};