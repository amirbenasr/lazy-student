import { Button } from "@mui/material";
import React from "react";
import "../Styles/homepage.css";
import image from "../images/female-student.jpg";
import Container from "./Container";
import TechnologyCard from "./TechnologyCard";

function HomePage() {
  return (
    <div className="container">

      <div className="homepage">
        <img src={image} />

        <div className="onboarding-text">
          <p>
            Get your academic project done <br></br> <i>in Time</i>
          </p>
        <Button variant="contained">Get Started</Button>

        </div>

        <div className="tech-list">
          {/* <TechnologyCard
            image={
              "https://image.shutterstock.com/image-vector/front-end-development-web-application-260nw-521164462.jpg"
            }
            specialty={"Web-Project"}
            ></TechnologyCard>
            <TechnologyCard
            image={
              "https://www.editorinsidetechnology.com/images/digiicon/mobile-development.png"
            }
            specialty={"Mobile-Project"}
            ></TechnologyCard>
            <TechnologyCard
            image={
              "https://thumbs.dreamstime.com/z/backend-development-doodle-back-end-icon-website-cteation-hand-drawn-vector-illustration-139983107.jpg"
            }
            specialty={"Back-End-Project"}
            ></TechnologyCard>
            <TechnologyCard
            image={
              "https://thumbs.dreamstime.com/b/vector-illustration-full-stack-developer-working-computer-professional-programmer-coding-website-creation-proccess-172914142.jpg"
            }
            specialty={"FullStack-Project"}
          ></TechnologyCard> */}
        </div>

      </div>
          </div>
  );
}

export default HomePage;
