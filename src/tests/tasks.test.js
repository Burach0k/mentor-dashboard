const tasks = require('../server/contain/Tasks');

test('check tasks function', () => {
  const list = [
    ['name', 'link'],
    [
      'Presentation',
      'https://github.com/rolling-scopes-school/tasks/blob/2018-Q3/tasks/presentation.md'
    ],
    ['YouTube', 'https://github.com/rolling-scopes-school/tasks/blob/2018-Q3/tasks/youtube.md']
  ];
  const newDataList = [
    {
      name: 'Presentation',
      link: 'https://github.com/rolling-scopes-school/tasks/blob/2018-Q3/tasks/presentation.md'
    },
    {
      name: 'YouTube',
      link: 'https://github.com/rolling-scopes-school/tasks/blob/2018-Q3/tasks/youtube.md'
    }
  ];

  expect(tasks(list)).toEqual(newDataList);
});
