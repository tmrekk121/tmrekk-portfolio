import React from "react";

export default class Works extends React.Component {
  render() {
    return (
      <div id="item-content">
        <div className="work-div">
          <img src="images/portfolio.png" alt="portfolio" className="work-img" />
          <p className="work-title">Portfolio Site</p>
          <p>これまでの経歴や作品を載せたサイト</p>
        </div>
        <div className="work-div">
          <img src="images/old_portfolio.png" alt="old_portfolio" className="work-img" />
          <p className="work-title">Old Portfolio Site</p>
          <p>以前使用していたポートフォリオサイト</p>
        </div>
        <div className="work-div">
          <img src="images/sukuramukun.png" alt="sukuramukun" className="work-img" />
          <p className="work-title">Sukuramukun</p>
          <p>スクラム開発を支援するアプリ</p>
        </div>
        <div className="work-div">
          <img src="images/done.png" alt="done" className="work-img" />
          <p className="work-title">DONE</p>
          <p>KPTを円滑にするためのアプリ</p>
        </div>
      </div>
    );
  }
}