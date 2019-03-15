import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../views/Button';

export default class ButtonControll extends Component {
    state = {
        text: this.props.text,
        status: 'begin',
    };

    setClick = () => {
        const width = 600;
        const height = 600;
        const left = window.innerWidth / 2 - width / 2;
        const top = window.innerHeight / 2 - height / 2;

        const newWindow = window.open(
            `https://mentormew.herokuapp.com/register?socket_id=${this.props.socket.id}`,
            '',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
            scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
            height=${height}, top=${top}, left=${left}`
        );

        this.setState({
            text: 'Logging...',
            status: 'wait',
        });

        this.props.socket.on('sendResult', (name) => {
            newWindow.close();
            this.setState({
                text: 'Enabled',
                status: 'ready',
            });
            this.props.link.current.findByName(name);
        });
    };

    render() {
        return <Button click={this.setClick} text={this.state.text} status={this.state.status} />;
    }
}

ButtonControll.propTypes = {
    text: PropTypes.string,
    socket: PropTypes.shape({ id: PropTypes.string, on: PropTypes.func }).isRequired,
    link: PropTypes.shape({ current: PropTypes.object }).isRequired,
};

ButtonControll.defaultProps = {
    text: 'magic button',
};
