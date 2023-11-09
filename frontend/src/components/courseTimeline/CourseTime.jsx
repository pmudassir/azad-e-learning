import React from 'react'
import './courseTime.css'

const CourseTime = () => {
    return (
        <div className='container'>
            <div className="left">
                <h1>COURSE</h1>
                <h3>Timeline</h3>
                <img src="/images/handwriting.png" alt="" className='courseTimeImg' />
            </div>
            <div className="right">
                <div className="mainCard">
                    <div className="header"><p>TWENTY-20</p></div>
                    <div className="sub-sec-div">
                        <div className="sub-sections">
                            <h3 className='evening'>EVENING</h3>
                            <h3>7:30 PM</h3>
                            <h3>8:30 PM</h3>
                            <h3>9:30 PM</h3>
                        </div>
                        <div className="sub-sections">
                            <h3 className='morning'>MORNING</h3>
                            <h3>7:00 AM</h3>
                            <h3>8:00 AM</h3>
                            <h3>9:00 AM</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseTime