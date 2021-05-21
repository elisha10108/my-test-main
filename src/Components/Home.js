import React from "react";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
  TwitterIcon,
} from "react-share";


function Menu() {
  return (
    <div>
      <div className="share">
        <h1 className="menu">שמחות שבאת</h1>

        <button className="start">
          {" "}
          <Link to="Menu">התחילי השאלון</Link>{" "}
        </button>
      </div>

      <div className="share">
        <h6>מכירה חברה שהנושא </h6>
        <h6> קרוב לליבה</h6>
        <h6>שתפי איתה את השאלון</h6>

        <EmailIcon size={32} round={true} />
        <FacebookIcon size={32} round={true} />
        <WhatsappIcon size={32} round={true} />
        <TwitterIcon size={32} round={true} />
        <LinkedinIcon size={32} round={true} />
      </div>
    </div>
  );
}

export default Menu;
