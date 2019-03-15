// const fetch = require('cross-fetch');

var fs = require('fs');
var json = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

test('check students', () => {
  json.Mentors.map(mentor => {
    mentor.students.map(student => {
      expect(student.gitHub !== undefined).toEqual(true);
      expect(student.codeJam !== undefined).toEqual(true);
    });
  });
});

test('check valueof', () => {
  expect(typeof json.Mentors === 'object').toEqual(true);

  json.Mentors.map(mentor => {
    expect(typeof mentor === 'object').toEqual(true);

    if (mentor.students) expect(typeof mentor.students === 'object').toEqual(true);

    mentor.students.map(student => {
      expect(typeof student === 'object').toEqual(true);
    });

    if (mentor.codeJam) expect(typeof student.codeJam === 'object').toEqual(true);
  });

  expect(typeof json['Code Jam'] === 'object').toEqual(true);

  json['Code Jam'].map(codeJam => {
    expect(typeof codeJam === 'object').toEqual(true);
  });
});

test('check mentors', () => {
  expect(json.Mentors !== undefined).toEqual(true);

  json.Mentors.map(mentor => {
    expect(mentor.gitHub !== undefined).toEqual(true);
    expect(mentor.students !== undefined).toEqual(true);
  });
});

test('check code jam', () => {
  expect(json['Code Jam'] !== undefined).toEqual(true);
});

test('check code jam in studenst', () => {
  json.Mentors.map(mentor => {
    mentor.students.map(student => {
      if (student.codeJam)
        student.codeJam.map(codeJam => {
          expect(codeJam.value !== undefined).toEqual(true);
          expect(codeJam['pull request'] !== undefined).toEqual(true);
          expect(codeJam.status !== undefined).toEqual(true);
        });
    });
  });
});
