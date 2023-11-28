import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { cardData } from "../../data";

const Card = () => {
  return (
    <section className="cards-section" id="courses">
      <div className="cardContainer">
        <div className="cards-header">
          <span className="sideHeading">Ready To Learn?</span>
          <h1 className="heading">Featured Courses</h1>
        </div>
        <div className="cards">
          {cardData.map((item) => (
            <div className="cardItem" key={item.id}>
              <Link
                to={item.link}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="cardItemContent">
                  <img
                    width="95"
                    height="95"
                    className="card-icon"
                    src={item.imageUrl}
                    alt="course-avatar"
                  />
                  <h6
                    className="card-title"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></h6>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
