import React from "react";
import propTypes from "prop-types";
import Fade from "react-reveal/Fade";

export default function Features(props) {
  return (
    <div className="tiles-item" delay={props.delayMS}>
      <Fade bottom delay={props.delayMS}>
        <div className="tiles-item-inner">
          <div className="features-tiles-item-header">
            <div className="features-tiles-item-image mb-16">
              <img
                src={props.data.ImgSrc}
                alt={props.data.ImgAlt}
                width="64"
                height="64"
              />
            </div>
          </div>
          <div className="features-tiles-item-content">
            <h4 className="mt-0 mb-8">{props.data.title}</h4>
            <p className="m-0 text-sm">{props.data.desc}</p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

Features.propTypes = {
  delayMS: propTypes.number,
  data: propTypes.object,
};
