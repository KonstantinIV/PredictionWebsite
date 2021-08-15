import React from 'react';

import PostTitle from './PostTitle';
import PostCreator from './PostCreator';
import PostReleaseDate from './PostReleaseDate';
import PostText from './PostText';
import PostVoteFirstStage from './PostVoteFirstStage';
import PostVoteSecondStage from './PostVoteSecondStage';



export default class Post extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            result: {}
        };
    }

    //                {JSON.stringify(this.state.result)}

    render() {
        return (


            <div className="post-container d-flex flex-column">

                <PostTitle title={this.props.item.title} />
                <PostCreator username={this.props.item.username} created_at={this.props.item.created_at} />
                <PostReleaseDate release_at={this.props.item.release_at} />
                <PostText postText={this.props.item.text} />

                <PostVoteFirstStage 
                    likeCount={this.props.item.likes}
                    dislikeCount={this.props.item.dislikes}/>
                <PostVoteSecondStage />

            </div>




        )
    }
}
