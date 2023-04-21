const StudentVue = require('studentvue.js');
const fs = require('fs');

fs.readFile(__dirname + '/id_password.txt', (err, inputD) => {
  if (err) throw err;
  const separated = inputD.toString().split(' ');
  gotLoginInfo(separated[0], separated[1], separated[2]);
});

function gotLoginInfo(districtURL, id, password) {
  StudentVue.login(districtURL, id, password)
    .then(client => client.getGradebook())
    .then(grades => {
      const gradesRaw = grades;
      const parsedGrades = JSON.parse(gradesRaw);
      gotParsed(parsedGrades)
    });
}

function gotParsed(gradeJSON) {
    const course = gradeJSON.Gradebook.Courses.Course;
    numClasses = course.length;
    for (let i=0; i<numClasses; i++) {
        console.log(course[i].Title+": "+course[i].Marks.Mark.CalculatedScoreRaw+" ("+course[i].Marks.Mark.CalculatedScoreString+")");
    }
}