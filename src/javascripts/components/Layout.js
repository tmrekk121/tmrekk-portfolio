import React from "react";
import { Link } from "react-router-dom";
import Bottom from "./Bottom"

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="menu-div">
            <Link to="/" className="title" >tmrekk.dev</Link>
            <ul className="list-item">
              <li>
                <Link to="about" >About.</Link>
              </li>
              <li>
                <Link to="works" >Works.</Link>
              </li>
              <li>
                <a href="https://blog.tmrekk.dev">Blog.</a>
              </li>
            </ul>
            <ul className="social-icon">
              <li>
                <a href="https://github.com/tmrekk121" target="_blank" rel="noopener noreferrer" className="github-icon-link">
                  <span className="icon-github"></span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/tmrekk121" target="_blank" rel="noopener noreferrer" className="twitter-icon-link">
                  <span className="icon-twitter"></span>
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
