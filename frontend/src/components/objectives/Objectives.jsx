import React from "react";
import "./objectives.css";

const Features = () => {
  return (
    <section className="background-effect">
      <div className="colorEffect">
        <div className="featuresContainer">
          <h1 className="featureHeader">OBJECTIVES</h1>
          <span className="featureDescription">
            Azad E-Learning places a significant emphasis on mathematics
            education. Our primary objective is to provide students with a
            comprehensive foundation in mathematics. We focus on developing
            strong problem-solving abilities, numerical proficiency, and a deep
            understanding of mathematical concepts. Through interactive learning
            materials and expert educators, we ensure that students not only
            grasp mathematical theory but also recognize its practical
            applications in daily life. Our commitment to progress tracking and
            assessments helps students monitor their mathematical growth and
            build confidence in their skills. At Azad E-Learning, we are
            dedicated to equipping learners with the mathematics knowledge and
            capabilities needed for academic excellence and beyond.
          </span>
          <div className="featureComponents">
            <div className="featureComponent">
              <h3 className="featureComponentHeader">100+</h3>
              <p className="featureComponentDesc">
                Fully satisfied indian students through online mode
              </p>
            </div>
            <div className="featureComponent">
              <h3 className="featureComponentHeader">10000+</h3>
              <p className="featureComponentDesc">
                Fully satisfied Alumnis through offline mode
              </p>
            </div>
            <div className="featureComponent">
              <h3 className="featureComponentHeader">100+</h3>
              <p className="featureComponentDesc">
                Fully satisfied foreign students through online mode
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;