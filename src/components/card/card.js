import React from "react";
import PropTypes from "prop-types";
import "./card.scss";
import chip from "../../assets/img/chip.png";

export default function Card({ mode, details }) {
  let content;
  if (mode === "view") {
    const { user, expirationDate, type, number } = details;

    content = (
      <>
        <div className="card-logo">
          <img
            className="logo-img"
            src={require(`../../assets/img/${type}.png`)}
            alt="card-logo"
          />
        </div>
        <div className="card-chip">
          <img className="chip-img" src={chip} alt="chip" />
        </div>
        <div className="card-number">{number}</div>
        <div className="card-name-and-date">
          <div>{user}</div>
          <div> {expirationDate} </div>
        </div>{" "}
      </>
    );
  } else if (mode === "edit") {
  } else {
    content = (
      <div className="add-card">
        <div className="add-sign">+</div>
      </div>
    );
  }

  return <div className={"card-container"}>{content}</div>;
}

PropTypes.Card = {
  mode: PropTypes.boolean,
  details: PropTypes.object,
};
