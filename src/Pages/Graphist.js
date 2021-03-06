import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import SlideshowBis from "../components/SlideshowBis";
import { Link } from "react-router-dom";

export class Graphist extends Component {
  render() {
    return (
      <div className="graphist-wrapper">
        <div className="right-part">
          <div className="title-wrap-2">
            <Fade up delay={400}>
              <h1 className="big-title">
                Gra
                <br />
              </h1>
            </Fade>
            <Fade up delay={600}>
              <h1 className="big-title-bottom">Phiste</h1>
            </Fade>
            <Fade right>
              <div className="styled-forme-2"></div>
            </Fade>
          </div>
          <div className="previews-container-2">
            <Fade left delay={500}>
              <div className="previews-wrap-2">
                <SlideshowBis />
              </div>
            </Fade>
            <Fade up delay={700}>
              <p className="job-description-mobile-bis">
                De formation bac +2 en Communication et Marketing et animé par
                la passion du design, je me suis très vite spécialisé dans le
                graphisme.
                <br />
                <br />
                Fort de 7 ans d'expérience, je souhaite toujours m'améliorer et
                apprendre de nouvelles tendances. Au cours de ces années, j'ai
                pu réaliser des projets divers et variés que vous pouvez
                consulter ici.
              </p>
            </Fade>
          </div>
        </div>
        <div className="left-part">
          <Fade up delay={700}>
            <p className="job-description-graphist">
              Diplomé en <span>Communication et Marketing</span> et animé par la
              passion du design, je me suis très vite spécialisé dans le
              graphisme.
              <br />
              <br />
              Fort de 7 ans d'expérience, je souhaite toujours m'améliorer et
              apprendre de nouvelles tendances. Au cours de ces années, j'ai pu
              réaliser des projets divers et variés que vous pouvez consulter{" "}
              <Link to="/projets"><span>ici</span>.</Link>
            </p>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Graphist;
