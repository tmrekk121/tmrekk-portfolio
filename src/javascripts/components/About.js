import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <div className="item-content">
        <div className="about-div">
          <h2>Kentaro Sudate.</h2>
          <p className="map-pin"><i className="fas fa-map-marker-alt"></i> Okinawa, Japan</p>
        </div>

        <div className="about-div">
          <p className="sub-title">Biography.</p>
          <p className="about-p"><span className="mgr-10">1999</span> Born in Miyazaki, Japan.</p>
        </div>

        <div className="about-div">
          <p className="sub-title">Contact me.</p>
          <ul>
            <li><a href="https://github.com/tmrekk121">GitHub</a></li>
            <li><a href="https://twitter.com/tmrekk121">Twitter</a></li>
          </ul>
        </div>
      </div>
    );
  }
}