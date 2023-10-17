import React from "react";
import "./widget.css";

const widgetData = [
  {
    id: 1,
    title: "Foundation Programs",
    imageUrl:
    "https://img.icons8.com/color/96/theirs.png",
  },
  {
    id: 2,
    title: "Pre-Primary TTC",
    imageUrl:
      "https://img.icons8.com/external-goofy-flat-kerismaker/96/external-Female-teacher-education-goofy-flat-kerismaker.png",
  },
  {
    id: 3,
    title: "Montessori <br/> TTC",
    imageUrl:
      "https://img.icons8.com/external-goofy-flat-kerismaker/96/external-Female-teacher-education-goofy-flat-kerismaker.png",
  },
  {
    id: 4,
    title: "Hindi Teacher's Courses",
    imageUrl:
      "https://img.icons8.com/external-goofy-flat-kerismaker/96/external-Female-teacher-education-goofy-flat-kerismaker.png",
  },
  {
    id: 4,
    title: "Competitive Goals",
    imageUrl:
      "https://img.icons8.com/external-goofy-flat-kerismaker/96/external-Female-teacher-education-goofy-flat-kerismaker.png",
  },
];

const Widget = () => {
  return (
    <div className="container">
      <div className="header">
        <h1 className="heading">
          <b>
            Ready To Learn? <br />
          </b>
          Featured Courses
        </h1>
      </div>
      <div className="widgets">
        {widgetData.map((item) => (
          <div className="widgetItem" key={item.id}>
            <div className="widgetItemContent">
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

export default Widget;
