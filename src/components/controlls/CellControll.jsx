import React from 'react';
import { pure } from 'recompose';
import Cell from '../views/Cell';

const CellControll = ({ text, link, className, statusTask }) => {
    let returnCell;
    switch (className) {
        case 'taskName':
            returnCell = (
                <Cell className={`${className} ${statusTask}`}>
                    {link === 'no link' ? null : (
                        <a href={link} target='_blank' rel='noopener noreferrer'>
                            {text}
                        </a>
                    )}
                </Cell>
            );
            break;
        case 'studentTask':
            returnCell = (
                <Cell className={`${className} ${statusTask}`}>
                    {link === 'no link' ? null : (
                        <a href={link} target='_blank' rel='noopener noreferrer'>
                            {null}
                        </a>
                    )}
                </Cell>
            );
            break;
        case 'empty':
            returnCell = <Cell className={className} />;
            break;
        case 'studentInfo':
            returnCell = (
                <Cell className={className}>
                    {link === 'no link' ? null : (
                        <a href={link} target='_blank' rel='noopener noreferrer'>
                            {text}
                        </a>
                    )}
                </Cell>
            );
            break;
        default:
            returnCell = <td>ERROR</td>;
    }

    return returnCell;
};

export default pure(CellControll);
