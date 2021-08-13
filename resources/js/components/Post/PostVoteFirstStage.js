import React from 'react';



export default class PostVoteFirstStage extends React.Component{
    constructor(props) {
        super(props);


    this.state = {
      result:{}
    };
    }
   
    
    render(){
        return( 
            <div className="post-container-vote-container d-flex flex-row" >

            <div className="post-container-likeButton  post-container-button"></div>
            <div className="post-container-voteCount-container">
                <div className="post-container-voteCount-number-container">

                </div>
                <div className="post-container-voteCount-visualBar">
                    
                </div>
            </div>

            <div className="post-container-dislikeButton  post-container-button"></div>

            <div className="post-container-comment   post-container-button">
                COMMENTS
            </div>


        </div>
        )
    }
}
