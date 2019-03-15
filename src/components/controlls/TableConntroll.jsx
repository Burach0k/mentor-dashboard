import React, { PureComponent } from 'react';
import Table from '../views/Table';

export default class TableControll extends PureComponent {
    state = {};

    static getDerivedStateFromProps(nextProps) {
        const lines = [];

        lines.push([
            { id: -1, className: 'empty', statusTask: null, link: null, text: 'no' },
            ...nextProps.tasks.map((elem, index) => {
                return {
                    id: index,
                    text: elem.gitHub,
                    link: `https://github.com/${elem.gitHub}`,
                    className: 'studentInfo',
                    statusTask: null,
                };
            }),
        ]);

        nextProps.statusTasks.forEach((elem) => {
            lines.push([
                {
                    id: -1,
                    statusTask: elem.status.replace(/\s+/g, ''),
                    link: elem.link,
                    className: 'taskName',
                    text: elem.name,
                },
                ...nextProps.tasks.map((student, index) => {
                    const currentTask = student.codeJam.find((task) => {
                        return task.name === elem.name;
                    });
                    return {
                        id: index,
                        statusTask: currentTask
                            ? currentTask.status.replace(/\s+/g, '')
                            : (elem.status.replace(/\s+/g, '') === 'ToDo' && 'ToDo') || 'noTask',
                        link: currentTask ? currentTask['pull request'] || 'no link' : 'no link',
                        text: 'no',
                        className: 'studentTask',
                    };
                }),
            ]);
        });
        return { lines };
    }

    render() {
        return <Table lines={this.state.lines} />;
    }
}
