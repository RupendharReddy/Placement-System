import React, { useState } from "react";
import "../stylefiles/container styles/Certificates.css";
import googlecloud from "../images/certificates/googlecloud.png";
import practicalweb from "../images/certificates/PracticalWebDevelopment.jpg";
import problem from "../images/certificates/problemsolving.png";
import java from "../images/certificates/programming_in_java.jpeg";
import sql from "../images/certificates/sql.png";
import cybersecurity from "../images/certificates/Cyber_Security.jpeg";
import AssociateteAnalysis from "../images/certificates/AssociationAnalysisUsingPython.png";
import { Divider, Image } from "antd";

const Certificates = () => {
  const [Certifications, setCertifications] = useState([
    {
      name: "Google Cloud",
      image: googlecloud,
      description: "Google Cloud Career Launchpad - Cloud Engineer track certificate for successful completion of all the courses and labs.",
    },
    {
      name: "Practical Web Development",
      image: practicalweb,
      description: "Web Development Certificate for successful completion of all 22 courses.",
    },
    {
      name: "Problem Solving",
      image: problem,
      description: "Problem Solving Certificate for successful completion of all the assignments.",
    },
    {
      name: "Programming in Java",
      image: java,
      description: "Programming in Java Certificate for successful completion of a 12-week course and online assignments with a consolidated score of 63%.",
    },
    {
      name: "SQL",
      image: sql,
      description: "SQL Certificate for successful completion of all assignments.",
    },
    {
      name: "Cyber Security - Internship",
      image: cybersecurity,
      description: "Cyber Security Certificate for successful completion of all assignments.",
    },
    {
      name: "Association Analysis Using Python",
      image: AssociateteAnalysis,
      description: "The certicate is for successfully completing the course Association Analysis using Python",
    }
  ]);

  return (
    <div className="certificates">
      {Certifications.map((certificate, index) => (
        <div>
          <div key={index} className="certificate-card">
            <div className="certificate-image">
              <Image width={300} preview={{scaleStep:2.0}} src={certificate.image} alt={certificate.name} />
            </div>
            <div className="certificate-info">
              <h3 className="certificate-name">{certificate.name}</h3>
              <p className="certificate-description">{certificate.description}</p>
            </div>
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default Certificates;
