import { Button, Container } from "@mui/material";
import React from "react";
import "../Styles/homepage.css";

import TechnologyCard from "./TechnologyCard";

function HomePage() {
  return (
    <Container>
      <div className="homepage">
        <div className="onboarding-text">
          <p>
            Get your academic project done <i>in Time</i>
          </p>
        </div>
        <div className="tech-list">
          <TechnologyCard
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
          ></TechnologyCard>
        </div>

        <Button variant="contained">Get Started</Button>
      </div>
    </Container>
  );
}

export default HomePage;
