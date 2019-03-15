import React from 'react';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import './App.css';
import ButtonControll from './controlls/ButtonControll';
import InputControll from './controlls/InputControll';

const socket = io('https://mentormew.herokuapp.com');

const App = (props) => {
    const ref = React.createRef();
    return (
        <div className='container'>
            <div className='element'>
                <InputControll
                    ref={ref}
                    options={props.dashboard.Mentors}
                    statusTasks={props.dashboard['Code Jam']}
                />
                <ButtonControll text='login with GitHub' socket={socket} link={ref} />
            </div>
        </div>
    );
};

App.propTypes = {
    dashboard: PropTypes.shape({
        Mentors: PropTypes.array,
        'Code Jam': PropTypes.array,
    }).isRequired,
};

export default App;
