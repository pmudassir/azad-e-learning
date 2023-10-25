import React from "react";
import "./competitiveGoals.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const goalsData = [
  {
    id: 1,
    title: "LSS",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut augue id quam tincidunt efficitur. Donec ligula metus, suscipit quis auctor eget, fringilla ac tellus. Quisque id quam at massa tincidunt lobortis. Curabitur id ipsum porttitor, porta turpis at, accumsan arcu. Sed eu pellentesque turpis.",
    imgUrl:
      "https://images.unsplash.com/photo-1550592704-6c76defa9985?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "NUMATS",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut augue id quam tincidunt efficitur. Donec ligula metus, suscipit quis auctor eget, fringilla ac tellus. Quisque id quam at massa tincidunt lobortis. Curabitur id ipsum porttitor, porta turpis at, accumsan arcu. Sed eu pellentesque turpis.",
    imgUrl:
      "https://images.unsplash.com/photo-1514369118554-e20d93546b30?auto=format&fit=crop&q=80&w=3870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "USS",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut augue id quam tincidunt efficitur. Donec ligula metus, suscipit quis auctor eget, fringilla ac tellus. Quisque id quam at massa tincidunt lobortis. Curabitur id ipsum porttitor, porta turpis at, accumsan arcu. Sed eu pellentesque turpis.",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1664372145541-4556b409492e?auto=format&fit=crop&q=80&w=3869&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "NMMS",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut augue id quam tincidunt efficitur. Donec ligula metus, suscipit quis auctor eget, fringilla ac tellus. Quisque id quam at massa tincidunt lobortis. Curabitur id ipsum porttitor, porta turpis at, accumsan arcu. Sed eu pellentesque turpis.",
    imgUrl:
      "https://images.unsplash.com/photo-1630983358494-96012d838b84?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
  },
  {
    id: 5,
    title: "NTSE",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut augue id quam tincidunt efficitur. Donec ligula metus, suscipit quis auctor eget, fringilla ac tellus. Quisque id quam at massa tincidunt lobortis. Curabitur id ipsum porttitor, porta turpis at, accumsan arcu. Sed eu pellentesque turpis.",
    imgUrl:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=3870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CompetitiveGoals = () => {
  return (
    <>
      <Navbar />
      <div className="goalsContainer">
      <div className="goalsHeder">
        
      </div>
        <div className="goalsCards">
          {goalsData.map((item, index) => (
            <div className="goalsCard" key={item.id}>
              <div
                className={`cardContent ${
                  index % 2 === 0 ? "normal" : "reversed"
                }`}
              >
                <div className="left">
                  <div className="details">
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                  </div>
                  <button className="enrollButton">Enroll Now</button>
                </div>
                <div className="right">
                  <img
                    src={item.imgUrl}
                    alt="courseImage"
                    className="goalsImage"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompetitiveGoals;
