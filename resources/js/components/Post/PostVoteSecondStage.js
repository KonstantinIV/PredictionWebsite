import React from 'react';



export default class PostVoteSecondStage extends React.Component{
    constructor(props) {
        super(props);


    this.state = {
      result:{}
    };
    }
   
    
    render(){
        return( 

      

            <div className="post-container-vote-second-container">
                <div className="post-container-vote-second-starVoteBar">
                    <div className="post-container-vote-second-starVote"></div>
                    <div className="post-container-vote-second-starVote"></div>
                    <div className="post-container-vote-second-starVote"></div>
                    <div className="post-container-vote-second-starVote"></div>
                    <div className="post-container-vote-second-starVote"></div>
                </div>

                <div className="post-container-vote-second-stats">
                    0 votes
                </div>

            </div>
        )
    }
}
