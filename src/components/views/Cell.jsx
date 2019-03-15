import React from 'react';
import PropTypes from 'prop-types';
import './cell.css';

const Cell = ({ className, children }) => {
    return <td className={className}>{children}</td>;
};
export default Cell;

Cell.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node,
};

Cell.defaultProps = {
    children: null,
};
