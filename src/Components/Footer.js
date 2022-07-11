import React from "react";
import { FaFreeCodeCamp } from "react-icons/fa";

function Footer(props) {
  return (
    <footer className="footer">
      <p>
        Challenge by : <FaFreeCodeCamp /> FreeCodeCamp
      </p>
      <p>&copy;Copyright ({props.year}) Created By : Harshal Surwase</p>
    </footer>
  );
}
export default Footer;
