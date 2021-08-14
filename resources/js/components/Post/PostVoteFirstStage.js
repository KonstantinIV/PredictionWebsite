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

            <div className="post-container-likeButton  post-container-button">
                <img className="postVoteButton" src="img/upVoteGreenEmpty.svg"  alt="icon"/>
            </div>


            <div className="post-container-voteCount-container d-flex flex-column">
                <div className="post-container-voteCount-number-container container-fluid d-flex flex-row">
                    <div className="post-container-voteCount-number-likes">5</div>
                    <div className="post-container-voteCount-dot">●</div>
                    <div className="post-container-voteCount-number-dislikes">7</div>

                </div>
                <div className="post-container-voteCount-visualBar">
                    <div className="post-container-voteCount-visualBar-green"></div>
                    <div className="post-container-voteCount-visualBar-red"></div>
                </div>
            </div>

            <div className="post-container-dislikeButton  post-container-button">
                <img className="postVoteButton" src="img/downVoteRedEmpty.svg"  alt="icon"/>

            </div>

            <div className="post-container-comment   post-container-button">
                COMMENTS
            </div>


        </div>
        )
    }
}
