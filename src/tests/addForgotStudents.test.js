const addForgotStudents = require('../server/contain//addForgotStudents.js');

test('check addForgotStudents function', () => {
  const dataList = [
    [null, 'https://github.com/aliaksandrzahorski', 'https://github.com/burak'],
    [null, 'https://github.com/aliaksandrzahorski', 'https://github.com/pooo'],
    [null, 'https://github.com/andrei', 'https://github.com/badstudent']
  ];

  const mentor = {
    name: 'akiaksandr zahorski',
    gitHub: 'aliaksandrzahorski',
    students: [
      {
        gitHub: 'andrei',
        codeJam: []
      },
      {
        gitHub: 'neandrei',
        codeJam: []
      }
    ]
  };

  const mentorList = [
    {
      name: 'akiaksandr zahorski',
      gitHub: 'aliaksandrzahorski',
      students: [
        {
          gitHub: 'andrei',
          codeJam: []
        },
        {
          gitHub: 'neandrei',
          codeJam: []
        }
      ]
    },
    {
      name: 'andrei andrei',
      gitHub: 'andrei',
      students: [
        {
          gitHub: 'badstudent',
          codeJam: []
        }
      ]
    },
    {
      name: 'andrei pupupkin',
      gitHub: 'andreitoo',
      students: []
    }
  ];

  const newDataList = [
    {
      gitHub: 'burak',
      codeJam: []
    },
    {
      gitHub: 'pooo',
      codeJam: []
    }
  ];
  expect(addForgotStudents(dataList, mentor, mentorList)).toEqual(newDataList);
});
