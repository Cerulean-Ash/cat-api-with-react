import React from "react";
import "../style/DescriptionCard.css";

const DescriptionCard = (props) => {
  let description = "";
  if (props.info) {
    description = (
      <div className="ui segment description-card">
        <h2 className="description-card__breed-name">{props.info.name}</h2>
        <div className="description-card__description">
          {props.info.description}
        </div>
        <div className="description-card__info-container">
          <div>
            <div className="description-card__life-span">
              <span>Life Span:</span> {props.info.life_span} years
            </div>
            <div className="description-card__weight">
              <span>Weight:</span> {props.info.weight.metric} kg
            </div>
          </div>
          <a
            className="description-card__link"
            href={props.info.wikipedia_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            More info
          </a>
        </div>
      </div>
    );
  }
  return description;
};

export default DescriptionCard;
