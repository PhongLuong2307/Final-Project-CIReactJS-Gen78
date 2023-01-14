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

                        </div>

                        <div class="table-responsive">
                            <table class="table" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <th></th>
                                    <th>MONDAY</th>
                                    <th>TUESDAY</th>
                                    <th>WEDNESDAY</th>
                                    <th>THURSDAY</th>
                                    <th>FRIDAY</th>
                                    <th>SATURDAY</th>
                                    <th>SUNDAY</th>
                                </thead>
                                <tbody>
                                    <tr className='table-row'>
                                        <td>
                                            <div className='hour big-height'>06.00 - 07.00</div>
                                        </td>
                                        <td>
                                            <div className='event'>
                                                <h6 className='event-title'>Primary Health Care</h6>
                                                <span className='event-time'>06.00 - 07.00</span>
                                                <div className='event-address'>
                                                    Ann Blyumin, Office 367, Hall A
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='event'>
                                                <h6 className='event-title'>Primary Health Care</h6>
                                                <span className='event-time'>06.00 - 07.00</span>
                                                <div className='event-address'>
                                                    Ann Blyumin, Office 367, Hall A
                                                </div>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td rowSpan='4'>
                                            <div className='event' style={{ paddingBottom: '122px' }}>
                                                <h6 className='event-title'>Outpatient Surgery</h6>
                                                <span className='event-time'>06.00 - 10.00</span>
                                                <div className='event-address'>
                                                    John D. Tom, Office 6, Hall B
                                                </div>

                                                <br />

                                                <h6 className='event-title'>Ophthalmology Clinic</h6>
                                                <span className='event-time'>06.30 - 07.30</span>
                                                <div className='event-address'>
                                                    Sue Collins, Office 114, Hall C
                                                </div>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                    <tr className='table-row'>
                                        <td>
                                            <div className='hour small-height'>07.00 - 08.00</div>
                                        </td>
                                        <td rowSpan='2'>
                                            <div className='event'>
                                                <h6 className='event-title'>Gynaecological Clinic</h6>
                                                <span className='event-time'>07.00 - 09.00</span>
                                                <div className='event-address'>
                                                    Robert Brown, Office 224, Hall B
                                                </div>
                                            </div>
                                        </td>
                                        <td rowSpan='2'>
                                            <div className='event'>
                                                <h6 className='event-title'>Gynaecological Clinic</h6>
                                                <span className='event-time'>07.00 - 09.00</span>
                                                <div className='event-address'>
                                                    Robert Brown, Office 224, Hall B
                                                </div>
                                            </div>
                                        </td>
                                        <td rowSpan='2'>
                                            <div className='event'>
                                                <h6 className='event-title'>Gynaecological Clinic</h6>
                                                <span className='event-time'>07.00 - 09.00</span>
                                                <div className='event-address'>
                                                    Robert Brown, Office 224, Hall B
                                                </div>
                                            </div>
                                        </td>
                                        <td rowSpan='4'>
                                            <div className='event' style={{ paddingBottom: '238px' }}>
                                                <h6 className='event-title'>Gynaecological Clinic</h6>
                                                <span className='event-time'>07.00 - 11.00</span>
                                                <div className='event-address'>
                                                    Robert Brown, Office 224, Hall B
                                                </div>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                    <tr className='table-row'>
                                        <td>
                                            <div className='hour small-height'>08.00 - 09.00</div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                    <tr className='table-row'>
                                        <td>
                                            <div className='hour big-height'>09.00 - 10.00</div>
                                        </td>
                                        <td></td>
                                        <td rowSpan='2' >
                                            <div className='event' style={{ paddingBottom: '139px' }}>
                                                <h6 className='event-title'>Pediatric Clinic</h6>
                                                <span className='event-time'>09.00 - 11.00</span>
                                                <div className='event-address'>
                                                    Clare Mitchell, Office 112, Hall C
                                                </div>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td>
                                            <div className='event'>
                                                <h6 className='event-title'>Primary Health Care</h6>
                                                <span className='event-time'>09.00 - 10.00</span>
                                                <div className='event-address'>
                                                    Robert van Hex, Office 207, Hall B
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='event'>
                                                <h6 className='event-title'>Primary Health Care</h6>
                                                <span className='event-time'>09.00 - 10.00</span>
                                                <div className='event-address'>
                                                    Robert van Hex, Office 207, Hall B
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className='table-row'>
                                        <td>
                                            <div className='hour big-height'>10.00 - 11.00</div>
                                        </td>
                                        <td rowSpan='3'>
                                            <div className='event' style={{ paddingBottom: '158px' }}>
                                                <h6 className='event-title'>Laryngological Clinic</h6>
                                                <span className='event-time'>10.00 - 13.00</span>
                                                <div className='event-address'>
                                                    Earlene Milone, Office 150, Hall B
                                                </div>
                                            </div>
                                        </td>
                                        <td rowSpan='2'>
                                            <div className='event' style={{ paddingBottom: '61px' }}>
                                                <h6 className='event-title'>Pediatric Clinic</h6>
                                                <span className='event-time'>10.00 - 12.00</span>
                                                <div className='event-address'>
                                                    Clare Mitchell, Office 112, Hall C
                                                </div>
                                            </div>
                                        </td>
                                        <td></td>

                                        <td>
                                            <div className='event'>
                                                <h6 className='event-title'>Gynaecological Clinic</h6>
                                                <span className='event-time'>10.00 - 11.00</span>
                                                <div className='event-address'>
                                                    Robert Brown, Office 224, Hall B
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='event'>
                                                <h6 className='event-title'>Gynaecological Clinic</h6>
                                                <span className='event-time'>10.00 - 11.00</span>
                                                <div className='event-address'>
                                                    Robert Brown, Office 224, Hall B
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className='table-row'>
                                        <td>
                                            <div className='hour'>11.00 - 12.00</div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                    <tr className='table-row'>
                                        <td>
                                            <div className='hour big-height'>12.00 - 13.00</div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <div className='event'>
                                                <h6 className='event-title'>Gynaecological Clinic</h6>
                                                <span className='event-time'>12.00 - 13.00</span>
                                                <div className='event-address'>
                                                    Tim Duncan, Office 224, Hall B
                                                </div>
                                            </div>
                                        </td>
                                        <td rowSpan='4'>
                                            <div className='event' style={{ paddingBottom: '157px' }}>
                                                <h6 className='event-title'>Outpatient Surgery</h6>
                                                <span className='event-time'>12.00 - 16.00</span>
                                                <div className='event-address'>
                                                    John D. Tom, Office 6, Hall B
                                                </div>

                                                <br />

                                                <h6 className='event-title'>Outpatient Rehabilitation</h6>
                                                <span className='event-time'>13.00 - 16.00</span>
                                                <div className='event-address'>
                                                    Robert van Hex, Gym Arena
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='event' style={{ paddingBottom: '25px' }}>
                                                <h6 className='event-title'>Pediatric Clinic</h6>
                                                <span className='event-time'>12.00 - 13.00</span>
                                                <div className='event-address'>
                                                    Clare Mitchell, Office 112, Hall C
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='event' style={{ paddingBottom: '25px' }}>
                                                <h6 className='event-title'>Pediatric Clinic</h6>
                                                <span className='event-time'>12.00 - 13.00</span>
                                                <div className='event-address'>
                                                    Clare Mitchell, Office 112, Hall C
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className='table-row'>
                                        <td>
                                            <div className='hour big-height'>13.00 - 14.00</div>
                                        </td>
                                        <td></td>
                                        <td rowSpan='2'>
                                            <div className='event' style={{ paddingBottom: '45px' }}>
                                                <h6 className='event-title'>Gynaecological Clinic</h6>
                                                <span className='event-time'>13.00 - 15.00</span>
                                                <div className='event-address'>
                                                    Tim Duncan, Office 224, Hall B
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='event'>
                                                <h6 className='event-title'>Gynaecological Clinic</h6>
                                                <span className='event-time'>13.00 - 14.00</span>
                                                <div className='event-address'>
                                                    Tim Duncan, Office 224, Hall B
                                                </div>
                                            </div>
                                        </td>
                                        <td rowSpan='4'>
                                            <div className='event' style={{ paddingBottom: '272px' }}>
                                                <h6 className='event-title'>Laryngological Clinic</h6>
                                                <span className='event-time'>13.00 - 17.00</span>
                                                <div className='event-address'>
                                                    Earlene Milone, Office 150, Hall B
                                                </div>
                                            </div>
                                        </td>
                                        <td rowSpan='4'>
                                            <div className='event' style={{ paddingBottom: '158px' }}>
                                                <h6 className='event-title'>Laryngological Clinic</h6>
                                                <span className='event-time'>13.00 - 17.00</span>
                                                <div className='event-address'>
                                                    Earlene Milone, Office 150, Hall B
                                                </div>

                                                <br />

                                                <h6 className='event-title'>Ophthalmology Clinic</h6>
                                                <span className='event-time'>13.00 - 17.00</span>
                                                <div className='event-address'>
                                                    Sue Collins, Office 114, Hall C
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='event'>
                                                <h6 className='event-title'>Outpatient Surgery</h6>
                                                <span className='event-time'>13.00 - 14.00</span>
                                                <div className='event-address'>
                                                    John D. Tom, Office 6, Hall B
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className='table-row'>
                                        <td>
                                            <div className='hour'>14.00 - 15.00</div>
                                        </td>
                                        <td></td>
                                        <td rowSpan='2'>
                                            <div className='event' style={{ paddingBottom: '61px' }}>
                                                <h6 className='event-title'>Cardiac Clinic</h6>
                                                <span className='event-time'>14.00 - 16.00</span>
                                                <div className='event-address'>
                                                    John D. Tom, Office 25, Hall A
                                                </div>
                                            </div>
                                        </td>
                                        <td></td>
                                    </tr>

                                    <tr className='table-row'>
                                        <td>
                                            <div className='hour big-height'>15.00 - 16.00</div>
                                        </td>
                                        <td>
                                            <div className='event' style={{ paddingBottom: '27px' }}>
                                                <h6 className='event-title'>Dental Clinic</h6>
                                                <span className='event-time'>15.00 - 16.00</span>
                                                <div className='event-address'>
                                                    Norma Blueman, Office 8, Hall A
                                                </div>
                                            </div>
                                        </td>
                                        <td rowSpan='4'>
                                            <div className='event' style={{ paddingBottom: '205px' }}>
                                                <h6 className='event-title'>Outpatient Surgery</h6>
                                                <span className='event-time'>15.00 - 19.00</span>
                                                <div className='event-address'>
                                                    John D. Tom, Office 6, Hall B
                                                </div>
                                            </div>
                                        </td>
                                        <td rowSpan='4'>
                                            <div className='event' style={{ paddingBottom: '90px' }}>
                                                <h6 className='event-title'>Outpatient Surgery</h6>
                                                <span className='event-time'>15.00 - 19.00</span>
                                                <div className='event-address'>
                                                    John D. Tom, Office 6, Hall B
                                                </div>

                                                <br />

                                                <h6 className='event-title'>Outpatient Rehabilitation</h6>
                                                <span className='event-time'>16.00 - 19.00</span>
                                                <div className='event-address'>
                                                    Robert van Hex, Gym Arena
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className='table-row'>
                                        <td>
                                            <div className='hour big-height'>16.00 - 17.00</div>
                                        </td>
                                        <td rowSpan='2'>
                                            <div className='event' style={{ paddingBottom: '50px' }}>
                                                <h6 className='event-title'>Outpatient Surgery</h6>
                                                <span className='event-time'>16.00 - 18.00</span>
                                                <div className='event-address'>
                                                    John D. Tom, Office 6, Hall B
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='event' style={{ paddingBottom: '26px' }}>
                                                <h6 className='event-title'>Dental Clinic</h6>
                                                <span className='event-time'>16.00 - 17.00</span>
                                                <div className='event-address'>
                                                    Norma Blueman, Office 8, Hall A
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='event' style={{ paddingBottom: '26px' }}>
                                                <h6 className='event-title'>Dental Clinic</h6>
                                                <span className='event-time'>16.00 - 17.00</span>
                                                <div className='event-address'>
                                                    Norma Blueman, Office 8, Hall A
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className='table-row'>
                                        <td>
                                            <div className='hour'>17.00 - 18.00</div>
                                        </td>
                                        <td></td>
                                        <td rowSpan='3'>
                                            <div className='event'>
                                                <h6 className='event-title'>Primary Health Care</h6>
                                                <span className='event-time'>17.00 - 20.00</span>
                                                <div className='event-address'>
                                                    Robert van Hex, Office 207, Hall B
                                                </div>
                                            </div>
                                        </td>
                                        <td rowSpan='3'>
                                            <div className='event'>
                                                <h6 className='event-title'>Primary Health Care</h6>
                                                <span className='event-time'>17.00 - 20.00</span>
                                                <div className='event-address'>
                                                    Robert van Hex, Office 207, Hall B
                                                </div>
                                            </div>
                                        </td>
                                        <td></td>
                                    </tr>

                                    <tr className='table-row'>
                                        <td>
                                            <div className='hour'>18.00 - 19.00</div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                    <tr className='table-row'>
                                        <td>
                                            <div className='hour'>19.00 - 20.00</div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TimeTable;