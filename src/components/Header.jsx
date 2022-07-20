import React from "react";
import propTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  const headerStyles = { backgroundColor: bgColor, color: textColor };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "salam amoo joon chetori? vaght kame bejonb",
  bgColor: "rgba(0,0,0,.4)",
  textColor: "#ff6a95",
};
Header.propTypes = {
  text: propTypes.string,
  bgColor: propTypes.string,
  textColor: propTypes.string,
};
export default Header;
