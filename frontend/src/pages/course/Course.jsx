import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./course.css";
import Footer from "../../components/footer/Footer";

const courseData = [
    {
        title: "English",
        beginner: {
            image: "/images/englishBeginner.svg",
            description:
                "Nunc et nisi non enim eleifend volutpat.ipsum metus volutpat nisi, sit amet tincidunt metus purus at urna. Maecenas lacinia",
        },
        intermediate: {
            image: "/images/englishIntermediate.svg",
            description:
                "vestibulum est sit amet aliquet. Aliquam  augue. Aliquam erat volutpat. Nulla turpis ante, pellentesque eu neque quis",
        },
        advanced: {
            image: "/images/englishAdvanced.svg",
            description:
                "semper rutrum metus. Curabitur metus. Sed accumsan metus sem, ut mattis justo tincidunt eget. Donec venenatis egestas",
        },
    },
    {
        title: "Hindi",
        beginner: {
            image: "/images/hindiBeginner.svg",
            description:
                "Nunc et nisi non enim eleifend volutpat.ipsum metus volutpat nisi, sit amet tincidunt metus purus at urna. Maecenas lacinia",
        },
        intermediate: {
            image: "/images/hindiIntermediate.svg",
            description:
                "vestibulum est sit amet aliquet. Aliquam  augue. Aliquam erat volutpat. Nulla turpis ante, pellentesque eu neque quis",
        },
        advanced: {
            image: "/images/hindiAdvanced.svg",
            description:
                "semper rutrum metus. Curabitur metus. Sed accumsan metus sem, ut mattis justo tincidunt eget. Donec venenatis egestas",
        },
    },
    {
        title: "Maths",
        beginner: {
            image: "/images/mathsBeginner.svg",
            description:
                "Nunc et nisi non enim eleifend volutpat.ipsum metus volutpat nisi, sit amet tincidunt metus purus at urna. Maecenas lacinia",
        },
        intermediate: {
            image: "/images/mathsIntermediate.svg",
            description:
                "vestibulum est sit amet aliquet. Aliquam  augue. Aliquam erat volutpat. Nulla turpis ante, pellentesque eu neque quis",
        },
        advanced: {
            image: "/images/mathsAdvanced.svg",
            description:
                "semper rutrum metus. Curabitur metus. Sed accumsan metus sem, ut mattis justo tincidunt eget. Donec venenatis egestas",
        },
    },
];

const Course = () => {
    return (
        <div>
            <Navbar />
            <div className="courseContainer">
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
                                    <img
                                        className="courseImage"
                                        src={item.beginner.image}
                                        alt="courseImage"
                                    />
                                    <div className="features">
                                        <h5 className="courseLevel">Beginner</h5>
                                        <p className="courseDescription">
                                            {item.beginner.description}
                                        </p>
                                    </div>
                                    <button className="button" type="submit">
                                        Enroll Now
                                    </button>
                                </div>
                                <div className="course">
                                    <img
                                        className="courseImage"
                                        src={item.intermediate.image}
                                        alt="courseImage"
                                    />
                                    <div className="features">
                                        <h5 className="courseLevel">Intermediate</h5>
                                        <p className="courseDescription">
                                            {item.intermediate.description}
                                        </p>
                                    </div>
                                    <button className="button" type="submit">
                                        Enroll Now
                                    </button>
                                </div>
                                <div className="course">
                                    <img
                                        className="courseImage"
                                        src={item.advanced.image}
                                        alt="courseImage"
                                    />
                                    <div className="features">
                                        <h5 className="courseLevel">Advanced</h5>
                                        <p className="courseDescription">
                                            {item.advanced.description}
                                        </p>
                                    </div>
                                    <button className="button" type="submit">
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Course;