import React from "react";
import "./card.css";

const cardData = [
  {
    id: 1,
    title: "Foundation Programs",
    imageUrl:
      "https://img.icons8.com/external-smashingstocks-hand-drawn-color-smashing-stocks/100/external-Abacus-education-smashingstocks-hand-drawn-color-smashing-stocks.png",
  },
  {
    id: 2,
    title: "Pre-Primary TTC",
    imageUrl: "https://i.ibb.co/MpCD2wf/teacher-5190740.png",
  },
  {
    id: 3,
    title: "Montessori <br/> TTC",
    imageUrl:
      "https://img.icons8.com/external-justicon-lineal-color-justicon/128/external-business-presentation-back-to-school-justicon-lineal-color-justicon.png",
  },
  {
    id: 4,
    title: "Hindi <br/> TTC",
    imageUrl: "https://i.ibb.co/PhdRvqr/hindi.png",
  },
  {
    id: 4,
    title: "Competitive Goals",
    imageUrl:
      "https://img.icons8.com/external-goofy-flat-kerismaker/192/external-Goals-business-goofy-flat-kerismaker.png",
  },
];

const Card = () => {
  return (
    <div className="container">
      <div className="header">
        <span className="sideHeading">Ready To Learn?</span>
        <h1 className="heading">Featured Courses</h1>
      </div>
      <div className="cards">
        {cardData.map((item) => (
          <div className="cardItem" key={item.id}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
