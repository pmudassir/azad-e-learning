import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const cardData = [
  {
    id: 1,
    title: "Foundation Programs",
    link: "/course",
    imageUrl:
      "https://img.icons8.com/external-smashingstocks-hand-drawn-color-smashing-stocks/100/external-Abacus-education-smashingstocks-hand-drawn-color-smashing-stocks.png",
  },
  {
    id: 2,
    title: "Pre-Primary TTC",
    link: "/ppttc",
    imageUrl: "https://i.ibb.co/MpCD2wf/teacher-5190740.png",
  },
  {
    id: 3,
    title: "Montessori <br/> TTC",
    link: "/mttc",
    imageUrl:
      "https://img.icons8.com/external-justicon-lineal-color-justicon/128/external-business-presentation-back-to-school-justicon-lineal-color-justicon.png",
  },
  {
    id: 4,
    title: "Hindi <br/> TTC",
    link: "/httc",
    imageUrl: "https://i.ibb.co/PhdRvqr/hindi.png",
  },
  {
    id: 4,
    title: "Competitive Goals",
    link: "/competitive-goals",
    imageUrl:
      "https://img.icons8.com/external-goofy-flat-kerismaker/192/external-Goals-business-goofy-flat-kerismaker.png",
  },
];

const Card = () => {
  return (
    <section className="cards-section">
      <div className="cardContainer">
        <div className="header">
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
