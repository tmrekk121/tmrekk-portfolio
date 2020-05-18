import React from "react";
import { Link } from "react-router-dom";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div>
            <h2 id="title">tmrekk.dev</h2>
            <ul className="list-item">
              <li>
                <Link to="about" id="about" >About</Link>
              </li>
              <li>
                <Link to="works" id="works" >Works</Link>
              </li>
              <li>
                <a href="https://blog.tmrekk.dev">Blog.</a>
              </li>
            </ul>
            <ul class="social-icon">
              <li>
                <a href="https://github.com/tmrekk121" target="_blank" rel="noopener noreferrer" class="github-icon-link">
                  <i class="fab fa-github fa-2x fa-fw"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/tmrekk121" target="_blank" rel="noopener noreferrer" class="twitter-icon-link">
                  <i class="fab fa-twitter fa-2x fa-fw"></i>
                </a>
              </li>
            </ul>
          </div>
          <div id="item-content">
            {this.props.children}
          </div>
          <div class="slide" id="slide">
            <img src="images/flower.jpg" alt="Flower" />
            <img src="images/leaf.jpg" alt="Leaf" />
          </div>
        </div>
        <div class="bottom-menu">
          <p id="introduce">Kentaro Sudate. Web Engineer and ...</p>
          <p id="okinawa-scenery">Okinawa scenery</p>
        </div>
      </div>
    );
  }
}