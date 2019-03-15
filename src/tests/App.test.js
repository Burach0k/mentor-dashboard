import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
console.log(App)
const dashboard = {
    Mentors: [
        {
            name: 'sergey maksimuk',
            gitHub: 'maximuk',
            students: [
                {
                    gitHub: 'andrei-oksentyk',
                    codeJam: [
                        {
                            name: 'Code Jam "CoreJS"',
                            value: 100,
                            'pull request':
                                'https://github.com/andrei-oksentyk/rsschool-codejam/pull/1',
                            status: 'Checked',
                        },
                        {
                            name: 'Code Jam "CV"',
                            value: 95,
                            'pull request':
                                'https://github.com/andrei-oksentyk/rsschool-codejam1-cv/pull/1',
                            status: 'Checked',
                        },
                    ],
                },
            ],
        },
    ],
    'Code Jam': [
        {
            name: 'Code Jam "CV"',
            link: 'https://github.com/rolling-scopes-school/tasks/blob/2018-Q3/tasks/codejam-cv.md',
            status: 'Checked',
        },
        {
            name: 'Code Jam "CoreJS"',
            link:
                'https://github.com/rolling-scopes-school/tasks/blob/2018-Q3/tasks/codejam-corejs.md',
            status: 'Checked',
        },
    ],
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App dashboard={dashboard} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
