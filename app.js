console.log('Starting app..');

const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes');


var filterArray = _.uniq(['Mike', 1,2,1,4,3,6,2,'Rabbit', 'Mike']);
console.log(filterArray);

var res = notes.addNote();
console.log(res);

// fs.appendFile('greetings.txt',`Hello ${user.username} You are ${notes.age}!`, function(err){
//     if(err){
//         console.log('Unable to write to file');
//     }
// });