import React from 'react';

class LeftSideBar extends React.Component {
  
  render(){
    return(
      <div className="left-sidebar-content">
        <ul className="list-group">
          <li className="list-group-item">
            <span className="glyphicon glyphicon-user"></span> Lav Hinsu
          </li>
          <li className="list-group-item">
          <span className="glyphicon glyphicon-tasks"></span> News Feed
          </li>
          <li className="list-group-item">
          <span className="glyphicon glyphicon-envelope"></span> Messenger
          </li>
          <li className="list-group-item">
          <span className="glyphicon glyphicon-shopping-cart"></span> Market Place
          </li>
        </ul>
        <li className="list-group-item">
          <div><bold>Explore</bold></div>
        </li>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="glyphicon glyphicon-bookmark"></span> Saved
          </li>
          <li className="list-group-item">
          <span className="glyphicon glyphicon-list-alt"></span> Events
          </li>
          <li className="list-group-item">
          <span className="glyphicon glyphicon-file"></span> Pages
          </li>
          <li className="list-group-item">
          <span className="glyphicon glyphicon-globe"></span> Groups
          </li>
          <li className="list-group-item">
          <span className="glyphicon glyphicon-comment"></span> Friend List
          </li>
          <li className="list-group-item">
          <span className="glyphicon glyphicon-knight"></span> Games
          </li>
          <li className="list-group-item">
          <span className="glyphicon glyphicon-paste"></span> Jobs
          </li>
        </ul>
      </div>
    );
  }

}

export default LeftSideBar;