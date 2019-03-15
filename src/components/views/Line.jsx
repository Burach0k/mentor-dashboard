import React from 'react';
import { pure } from 'recompose';
import PropTypes from 'prop-types';
import CellControll from '../controlls/CellControll';

const Line = (props) => {
    let index = 0;
    return (
        <tr>
            {props.line.map((elem) => {
                index += 1;
                return <CellControll {...elem} key={index} />;
            })}
        </tr>
    );
};

Line.propTypes = {
    line: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default pure(Line);
