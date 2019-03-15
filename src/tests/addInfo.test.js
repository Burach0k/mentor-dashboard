const addInfo = require('../server/contain//addInfo.js');

test('check addStudents function', () => {
  const list2 = [
    ['task', 'link', 'Status'],
    [
      'Code Jam "CoreJS" ',
      'https://github.com/rolling-scopes-school/tasks/blob/2018-Q3/tasks/codejam-corejs.md',
      'Checked'
    ]
  ];

  const list1 = [
    [
      null,
      'https://github.com/maximuk',
      'https://github.com/sergey496',
      'Code Jam "CoreJS"',
      'https://github.com/sergey496/rsschool-codejam/pull/1',
      95
    ],
    [
      null,
      'https://github.com/PavelKuzniatsou',
      'https://github.com/KirillTovpinets',
      'Code Jam "CV"',
      'https://github.com/KirillTovpinets/rsschool-codejam1-cv/pull/1',
      95
    ]
  ];

  const student = {
    gitHub: 'sergey496',
    codeJam: []
  };

  const newDataList = [
    {
      name: 'Code Jam "CoreJS"',
      'pull request': 'https://github.com/sergey496/rsschool-codejam/pull/1',
      status: 'Checked',
      value: 95
    }
  ];

  const listInfo = [
    {
      name: 'sergey maksimuk',
      gitHub: 'maximuk',
      students: [
        {
          gitHub: 'sergey496',
          codeJam: []
        }
      ]
    },
    {
      name: 'nesergey nemaksimuk',
      gitHub: 'nemaximuk',
      students: []
    }
  ];

  expect(addInfo(list1, list2, student, listInfo)).toEqual(newDataList);
});
