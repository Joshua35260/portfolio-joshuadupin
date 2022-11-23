import React, { useContext } from "react";
import "./Experience.css";
import { themeContext } from "../../Context";

const Experience = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience">
      <div className="achievement">
        <div className="circle">1+</div>
        <span style={{ color: darkMode ? "white" : "" }}>Années</span>
        <span>d'expérience</span>
      </div>
      <div className="achievement">
        <div className="circle">11+</div>
        <span style={{ color: darkMode ? "white" : "" }}>Projets</span>
        <span>réalisés</span>
      </div>
      <div className="achievement">
        <div className="circle">1+</div>
        <span style={{ color: darkMode ? "white" : "" }}>Nombre de</span>
        <span>clients</span>
      </div>
    </div>
  );
};

export default Experience;
