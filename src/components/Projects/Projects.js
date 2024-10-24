import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import SportsBikesCars from "../../Assets/Projects/SportsBikesCars.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import truesays from "../../Assets/Projects/truesays.png";
import BookStore from "../../Assets/Projects/BookStore.jpeg";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={BookStore}
              isBlog={false}
              title="Book Store"
              description="Developed a full-stack web application using React.js, Node.js, MongoDB, and Express.js. The application allows admin to add, retrieve, update, and delete books with images, providing a seamless and responsive interface for managing a bookstore's inventory. Implemented backend services for CRUD operations and integrated MongoDB for data storage."
              ghLink=""
              demoLink="" //Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={truesays}
              isBlog={false}
              title="True Says"
              description="Developed the official website for Truesays Pvt. Ltd. using React.js, JavaScript, HTML, CSS, and Bootstrap. The project involved building a responsive, user-friendly interface with a focus on modern design practices and efficient code optimization."
              ghLink="https://github.com/rakshit2507/TrueSays"
              demoLink="https://truesays.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SportsBikesCars}
              isBlog={false}
              title="Sports Bikes And Cars"
              description="A basic web application built using React.js, HTML, and CSS that showcases a variety of sports bikes and cars. Features include a gallery view for each vehicle and information about their services."
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
