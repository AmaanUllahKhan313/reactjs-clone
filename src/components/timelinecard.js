import React from 'react';

class TimelineCard extends React.Component {
  
  render(){
    return(
        <div className="n-card">
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
                  20 hours
                </div>
              </div>
            </div>
            <div>My new profile picture</div>
            <img className="n-card-img" src="./fb-icon.png" alt=""></img>
            <div className="n-actions">
              <div>
                <div className="glyphicon glyphicon-thumbs-up" style={{marginRight:'10px'}}></div>Like
              </div>
              <div>
                <div className="glyphicon glyphicon-comment" style={{marginRight:'10px'}}></div>Comment
              </div>
              <div>
                <div className="glyphicon glyphicon-share-alt" style={{marginRight:'10px'}}></div>Share
              </div>
            </div>
        </div>
    );
  }

}

export default TimelineCard;