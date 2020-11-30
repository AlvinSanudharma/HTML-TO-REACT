import React from "react";
import Section from "elements/Section";
import Fade from "react-reveal/Fade";

import Images01 from "assets/images/clients-01.svg";
import Images02 from "assets/images/clients-02.svg";
import Images03 from "assets/images/clients-03.svg";
import Images04 from "assets/images/clients-04.svg";
import Images05 from "assets/images/clients-05.svg";

export default function Clients() {
  return (
    <Section className="clients">
      <Fade bottom delay={2000}>
        <div className="container">
          <div className="clients-inner section-inner has-top-divider has-bottom-divider">
            <ul className="list-reset">
              <li>
                <img src={Images01} alt="Clients 01" />
              </li>
              <li>
                <img src={Images02} alt="Clients 02" />
              </li>
              <li>
                <img src={Images03} alt="Clients 03" />
              </li>
              <li>
                <img src={Images04} alt="Clients 04" />
              </li>
              <li>
                <img src={Images05} alt="Clients 05" />
              </li>
            </ul>
          </div>
        </div>
      </Fade>
    </Section>
  );
}
