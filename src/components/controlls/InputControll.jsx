import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import TableConntroll from './TableConntroll';

export default class InputControll extends Component {
    constructor(props) {
        super(props);
        this.choosingByGitHub = null;
        this.state = {
            selectedOption:
                JSON.parse(localStorage.getItem('currentMentorForVladescoProgramm')) || null,
            options: props.options.map((mentor) => ({
                value: mentor.students,
                label: mentor.gitHub,
            })),
        };
    }

    handleChange = (selectedOption) => {
        localStorage.setItem('currentMentorForVladescoProgramm', JSON.stringify(selectedOption));
        this.setState({ selectedOption });
    };

    findByName = (nameOfMentor) => {
        const result = this.state.options.find(
            (elem) =>
                elem.label.toLowerCase().replace(/\s+/g, '') ===
                nameOfMentor.toLowerCase().replace(/\s+/g, '')
        );
        if (result) this.handleChange({ value: result.value, label: result.label });
        else this.handleChange({ value: [], label: nameOfMentor });
    };

    render() {
        const { selectedOption, options } = this.state;
        return selectedOption && selectedOption.value.length > 0 ? (
            <Fragment>
                <Select value={selectedOption} onChange={this.handleChange} options={options} />
                <TableConntroll
                    tasks={this.state.selectedOption.value}
                    statusTasks={this.props.statusTasks}
                />
            </Fragment>
        ) : (
            <Fragment>
                <Select value={selectedOption} onChange={this.handleChange} options={options} />
                <div>ментор не выбран или отсутствует в списке</div>
            </Fragment>
        );
    }
}

InputControll.propTypes = {
    statusTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
};
