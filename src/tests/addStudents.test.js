const addStudents = require('../server/contain/addStudents.js');

test('check addStudents function', () => {
  const dataList = [
    ['Akiaksandr Zahorski', 'grenbork'],
    ['Akiaksandr Zahorski', 'pupkin'],
    ['Vladimir Pupkin', 'hoho'],
    ['Andrei Pupupkin', 'haha']
  ];

  const mentor = {
    name: 'akiaksandr zahorski',
    gitHub: 'aliaksandrzahorski',
    students: []
  };

  const mentorList = [
    {
      name: 'akiaksandr zahorski',
      gitHub: 'aliaksandrzahorski',
      students: []
    },
    {
      name: 'vladimir pupkin',
      gitHub: 'vladimir',
      students: []
    },
    {
      name: 'andrei pupupkin',
      gitHub: 'andrei',
      students: []
    }
  ];

  const newDataList = [
    {
      gitHub: 'grenbork',
      codeJam: []
    },
    {
      gitHub: 'pupkin',
      codeJam: []
    }
  ];

  expect(addStudents(dataList, mentor, mentorList)).toEqual(newDataList);
});
