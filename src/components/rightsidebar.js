import React from 'react';

class RightSideBar extends React.Component {
  
  render(){
    return(
      <div className="right-sidebar-content">
        <div className="sidebar-block">
          <span>Stories</span>
          <a href="#">Settings</a>
          <a>.</a>
          <a href="#">Archive</a>

          <div className="story-list">
          <div className="story-list-item">
            <div className="image-thumbnail">
              <div className="user-image">
              <img src="./fb-icon.png" alt="" className="icon-img"></img>
              </div>
            </div>
            <div className="user-title">
              <div>
                Someone
              </div>
              <div>
                20 hours ago
              </div>
            </div>
          </div>
          <div className="story-list-item">
            <div className="image-thumbnail">
              <div className="user-image">
              <img src="./fb-icon.png" alt="" className="icon-img"></img>
              </div>
            </div>
            <div className="user-title">
              <div>
                Someone 2
              </div>
              <div>
                2 hours ago
              </div>
            </div>
          </div>
          <div className="story-list-item">
            <div className="image-thumbnail">
              <div className="user-image">
              <img src="./fb-icon.png" alt="" className="icon-img"></img>
              </div>
            </div>
            <div className="user-title">
              <div>
                Someone 3
              </div>
              <div>
                22 hours ago
              </div>
            </div>
          </div>
          <div className="story-list-item">
            <div className="image-thumbnail">
              <div className="user-image">
              <img src="./fb-icon.png" alt="" className="icon-img"></img>
              </div>
            </div>
            <div className="user-title">
              <div>
                Someone 4
              </div>
              <div>
                10 hours ago
              </div>
            </div>
          </div>
          <div className="story-list-item">
            <div className="image-thumbnail">
              <div className="user-image">
              <img src="./fb-icon.png" alt="" className="icon-img"></img>
              </div>
            </div>
            <div className="user-title">
              <div>
                Someone 5
              </div>
              <div>
                4 hours ago
              </div>
            </div>
          </div>
          <div className="story-list-item">
            <div className="image-thumbnail">
              <div className="user-image">
                <img src="./fb-icon.png" alt="" className="icon-img"></img>
              </div>
            </div>
            <div className="user-title">
              <div>
                Someone 6
              </div>
              <div>
                20 hours ago
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="sidebar-block">
          <span> 2 Invitations Waiting<a>Invitation</a> </span>
        </div>
      </div>
    );
  }

}

export default RightSideBar;