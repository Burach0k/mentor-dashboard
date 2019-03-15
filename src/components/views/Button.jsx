import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
    return (
        <button className={props.status} type='button' onClick={props.click}>
            {props.text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    status: PropTypes.string,
    click: PropTypes.func.isRequired,
};
Button.defaultProps = {
    status: 'begin',
};

export default Button;
