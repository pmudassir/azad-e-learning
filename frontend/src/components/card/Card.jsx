import React from "react";
import "./card.css";

const cardData = [
  {
    id: 1,
    title: "Foundation Programs",
    imageUrl:
      "https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/198/1A1A1A/external-alphabet-education-smashingstocks-hand-drawn-black-smashing-stocks.png",
  },
  {
    id: 2,
    title: "Pre-Primary TTC",
    imageUrl:
      "https://img.icons8.com/external-icongeek26-outline-icongeek26/128/1A1A1A/external-teacher-physics-icongeek26-outline-icongeek26.png",
  },
  {
    id: 3,
    title: "Montessori <br/> TTC",
    imageUrl:
      "https://img.icons8.com/external-sbts2018-outline-sbts2018/117/1A1A1A/external-training-lean-thinking-sbts2018-outline-sbts2018.png",
  },
  {
    id: 4,
    title: "Hindi Teacher's Courses",
    imageUrl: "https://i.ibb.co/stj48kH/hindilink.png",
  },
  {
    id: 4,
    title: "Competitive Goals",
    imageUrl:
      "https://img.icons8.com/external-goofy-line-kerismaker/192/1A1A1A/external-Goals-business-goofy-line-kerismaker.png",
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
