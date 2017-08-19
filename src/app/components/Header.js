import React from "react";

export class Header extends React.Component {
  render() {
    return(
      <nav ClassName="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">Home2</a></li>
              <li><a href="#">Home3</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
