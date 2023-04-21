const StudentVue = require('studentvue.js');
const fs = require('fs');
fs.readFile(__dirname+'/id_password.txt', (err, inputD) => {
    if (err) throw err;
        seperated = inputD.toString().split(" ");
        gotLoginInfo(seperated[0], seperated[1], seperated[2]);
})

function gotLoginInfo(districtURL, id, password) {
    StudentVue.login(districtURL, id, password)
        .then(client => {
            gradebookRaw = client.getGradebook();
        })
        .catch(error => {
            console.error(error);
        });
}