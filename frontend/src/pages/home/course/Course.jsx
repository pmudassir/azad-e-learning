import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import "./course.css";

const courseData = [
  {
    title: "English",
    desc: "",
  },
  {
    title: "Hindi",
    desc: "",
  },
  {
    title: "Maths",
    desc: "",
  },
];

const Course = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="header">
          <h5>Main Focus</h5>
        </div>
        <div className="courseContainer">
          {courseData.map((item, index) => (
            <div className="courseItem" key={index}>
              <div className="courseSubject">
                <span>{item.title}</span>
              </div>
              <div className="courses">
                <div className="course">
                  <h5 className="courseLevel">Beginner</h5>
                  <div className="features">
                    <img className="courseImage" src="" alt="" />
                  </div>
                  <button type="submit">Enroll Now</button>
                </div>
                <div className="course">
                  <h5 className="courseLevel">Intermediate</h5>
                  <div className="features">
                    <img className="courseImage" src="" alt="" />
                  </div>
                  <button type="submit">Enroll Now</button>
                </div>
                <div className="course">
                  <h5 className="courseLevel">Advanced</h5>
                  <div className="features">
                    <img className="courseImage" src="" alt="" />
                  </div>
                  <button type="submit">Enroll Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
