const StudentVue = require('studentvue.js');
StudentVue.login('https://parentvue.cusdk8.org/PXP2_Login_Student.aspx?regenerateSessionId=True', '390099', 'Geonwoo384973')
    .then(client => client.getGradebook())
    .then(console.log);