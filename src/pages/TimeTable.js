import React from 'react';
import '../components/TimeTable/TimeTable.css';
import { Link } from 'react-router-dom';

const TimeTable = () => {
    return (
        <React.Fragment>
            <div className='timetableSite-container'>
                <div className='timetable-container'>
                    <div className='timetable-content'>
                        <div className='timetable-title-container'>
                            <h2 className='timetable-title'>Timetable</h2>
                            <ul className='bread-crumb'>
                                <li>
                                    <Link to='/' style={{ color: 'rgb(162, 162, 162)' }}>Home</Link>
                                </li>
                                <span>→</span>
                                <li>Timetable</li>
                            </ul>

                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TimeTable;