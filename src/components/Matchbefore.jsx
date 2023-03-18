import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Matchbefore = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="container">
      <div className={`image ${isVisible ? "visible" : ""}`} />
      <div className={`image2 ${isVisible ? "visible" : ""}`} />

      <div className="matchcontent">
        <h1>Scroll down to see the images</h1>
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          onSetActive={() => setIsVisible(true)}
        >
          <button>Scrol down</button>
        </Link>
      </div>
    </div>
  );
};

export default Matchbefore;

// CSS
