const StudentVue = require('studentvue.js');
const fs = require('fs');
let zeroPer = false

fs.access('zero-period.txt', fs.constants.F_OK, (err) => {
  if (err) {
    fs.writeFile('zero-period.txt', '0', (err) => {
      if (err) throw err;
      zeroPer = true;
    });
  } else {
    fs.readFile('zero-period.txt', 'utf8', (err, data) => {
      if (err) throw err;
      const number = parseInt(data);
      if (number === 0) {
        zeroPer = true;
      } else {
        zeroPer = false;
      }
    });
  }
});

function readCommunication() {
  try {
    const data = fs.readFileSync(__dirname + '/communication.txt', 'utf8');
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

fs.readFile(__dirname + '../id_password.txt', 'utf8', (err, inputD) => {
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
      gotParsed(parsedGrades);
    })
    .catch(err => console.error(err));
}

function gotParsed(gradeJSON) {
  const course = gradeJSON?.Gradebook?.Courses?.Course;
  const numClasses = course.length;
  const communication = readCommunication();
  if (communication.startsWith('all')) {
    for (let i=0; i<numClasses; i++) {
      console.log(course[i].Title+": "+course[i]?.Marks?.Mark?.CalculatedScoreRaw+" ("+course[i]?.Marks?.Mark?.CalculatedScoreString+")");
    }
  }
  else if (communication.startsWith('viewclasses')) {
    console.log("CLASSES");
    console.log("");
    for (let i=0; i<numClasses; i++) {
      console.log(course[i]?.Title);
    }
  }
  else if (communication.startsWith('specific')) {
    let numAssignments = null;
    let specificPeriod = null;
    const period = communication.slice(9, -1);
    if (zeroPer == true) {
      console.log(course[period].Title+": "+course[period].Marks.Mark.CalculatedScoreRaw+" ("+course[period].Marks.Mark.CalculatedScoreString+")");
      console.log("")
      numAssignments = course[period].Marks.Mark.Assignments.Assignment.length;
      specificPeriod = course[period].Marks.Mark.Assignments.Assignment;
      for (let i=0; i<numAssignments; i++) {
        console.log(specificPeriod[i].Measure+": "+specificPeriod[i].Score);
      }
    }
    else {
      console.log(course[period-1].Title+": "+course[period-1].Marks.Mark.CalculatedScoreRaw+" ("+course[period-1].Marks.Mark.CalculatedScoreString+")");
      console.log("")
      numAssignments = course[period-1].Marks.Mark.Assignments.Assignment.length;
      specificPeriod = course[period-1].Marks.Mark.Assignments.Assignment;
      for (let i=0; i<numAssignments; i++) {
        console.log(specificPeriod[i].Measure+": "+specificPeriod[i].Score);
      }
    }
  }
}
