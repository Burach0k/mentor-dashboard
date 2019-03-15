const addMentors = require('../server/contain//addMentors');

test('check addMentors function', () => {
  const dataList = [
    ['Name', 'Surname', 'City', 'Count', 'GitHub'],
    ['Aliaksandr', 'Klimau', 'Гомель', 3, 'https://github.com/quantum-noise'],
    ['Kseniya', 'Smorshchek', 'Минск', 3, 'https://github.com/KseniyaSmorshchek'],
    ['Andrei', 'Shelenhouski', 'Минск', 3, 'https://github.com/manuminsk'],
    ['Dzianis', 'Shutsikau', 'Минск', 5, 'https://github.com/Shutya']
  ];
  const newDataList = [
    {
      name: 'aliaksandr klimau',
      gitHub: 'quantum-noise',
      students: []
    },
    {
      name: 'kseniya smorshchek',
      gitHub: 'kseniyasmorshchek',
      students: []
    },
    {
      name: 'andrei shelenhouski',
      gitHub: 'manuminsk',
      students: []
    },
    {
      name: 'dzianis shutsikau',
      gitHub: 'shutya',
      students: []
    }
  ];
  expect(addMentors(dataList)).toEqual(newDataList);
});
