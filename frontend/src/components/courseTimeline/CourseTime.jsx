import React from 'react'
import './courseTime.css'

const CourseTime = () => {
    return (
        <div className='container'>
            <div className="left">
                <h1>Course</h1>
                <h3>Timeline</h3>
            </div>
            <div className="right">
                <div className="mainCard">
                    <div className="header">TWENTY-20</div>
                    <div className="sub-sections">
                        <h3>EVENING</h3>
                        <h3>7:30 PM</h3>
                        <h3>8:30 PM</h3>
                        <h3>9:30 PM</h3>
                        <h3>MORNING</h3>
                        <h3>7:00 AM</h3>
                        <h3>8:00 AM</h3>
                        <h3>9:00 AM</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseTime