import React from "react";
import { Link } from "react-router-dom";
import Bottom from "./Bottom"

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
            <ul className="social-icon">
              <li>
                <a href="https://github.com/tmrekk121" target="_blank" rel="noopener noreferrer" className="github-icon-link">
                  <i className="fab fa-github fa-2x fa-fw"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/tmrekk121" target="_blank" rel="noopener noreferrer" className="twitter-icon-link">
                  <i className="fab fa-twitter fa-2x fa-fw"></i>
                </a>
              </li>
            </ul>
          </div>
          {this.props.children}
        </div>
        <Bottom />
      </div>
    );
  }
}