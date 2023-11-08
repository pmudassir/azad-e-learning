import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./course.css";
import Footer from "../../components/footer/Footer";
import { courseData } from "../../data";

const Course = () => {
  return (
    <div>
      <Navbar />
      <div className="courseContainers">
        <div className="header">
          <h1>Main Focus</h1>
          <span className="courseDesc">
            <b className="bold">W</b>e offer a diverse range of courses, each
            meticulously designed to provide a comprehensive learning experience
            for English, Maths, and Hindi. Whether you're just starting your
            educational journey or looking to advance your skills, we've got you
            covered at every level.
          </span>
          <div className="courseOverviews">
          <div className="courseOverview">
          <img width="30" height="30" className="overviewIcon" src="https://img.icons8.com/color/144/checked--v1.png" alt="checked--v1"/>
            <h3 className="level">Beginner Level:</h3>
            <p>At the beginner level, our courses are tailored to provide a strong foundation in the chosen subject. For English, we cover the basics of grammar, vocabulary, and essential language skills. In Maths, we introduce fundamental concepts and problem-solving techniques, and for Hindi, we focus on building your proficiency in reading, writing, and speaking. Our beginner courses are perfect for those who are new to the subject or looking to refresh their knowledge.</p>
          </div>
          <div className="courseOverview">
          <img width="30" height="30" className="overviewIcon" src="https://img.icons8.com/color/144/checked--v1.png" alt="checked--v1"/>
            <h3 className="level">Intermediate Level:</h3>
            <p>Moving on to the intermediate level, our courses delve deeper into the subject matter. In English, we explore more advanced grammar rules, expand your vocabulary, and work on enhancing your conversational skills. For Maths, we tackle more complex topics and problem-solving strategies. In Hindi, our intermediate courses focus on refining your language skills for more in-depth communication. These courses are ideal for learners who want to take their understanding of the subject to the next level.</p>
          </div>
          <div className="courseOverview">
          <img width="30" height="30" className="overviewIcon" src="https://img.icons8.com/color/144/checked--v1.png" alt="checked--v1"/>
            <h3 className="level">Advanced Level:</h3>
            <p>At the advanced level, we offer courses designed to challenge and push your boundaries. In English, we dive into advanced language structures, literary analysis, and effective communication. In Maths, we tackle advanced mathematical concepts and problem-solving techniques. For Hindi, our advanced courses focus on fluency, complex literature, and cultural immersion. These courses are intended for those who are looking to master the subject and achieve a high level of proficiency.</p>
          </div>
          </div>
        </div>
        <div className="courseContainer">
          {courseData.map((item, index) => (
            <div>
              <h2 className="courseSubject">{item.subject}</h2>
              {item.levels.map((course) => (
                <div
                  key={course.level} className="courses">
                  <div class="card" key={index}>
                    <div class="card-img">
                      <img
                        className="courseImage"
                        src={course.image}
                        alt="courseImage"
                      />
                    </div>
                    <div class="card-info">
                      <p class="text-title">{course.level} </p>
                      <p class="text-body">{course.description}</p>
                    </div>
                    <div class="card-footer">
                      <span class="text-title">{course.price}</span>
                      <div class="card-button">
                        <svg class="svg-icon" viewBox="0 0 20 20">
                          <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                          <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                          <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Course;
