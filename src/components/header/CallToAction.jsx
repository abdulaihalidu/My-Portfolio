import React from "react";
import CV from "../../assets/my-cv.pdf";

const CallToAction = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Talk to me
      </a>
    </div>
  );
};

export default CallToAction;
