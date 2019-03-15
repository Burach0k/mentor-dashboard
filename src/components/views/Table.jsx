import React from 'react';
import PropTypes from 'prop-types';
import Line from './Line';
import './table.css';

const Table = ({ lines }) => {
    let index = 0;
    return (
        <table>
            <tbody>
                {lines.map((elem) => {
                    index += 1;
                    return <Line line={elem} key={index} />;
                })}
            </tbody>
        </table>
    );
};

Table.propTypes = {
    lines: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Table;
