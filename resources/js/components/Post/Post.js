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
                <PostCreator postCreator={this.props.item.user_id} />
                <PostReleaseDate postReleaseDate={this.props.item.release_at} />
                <PostText postText={this.props.item.text} />
                <PostVoteFirstStage />
                <PostVoteSecondStage />

            </div>




        )
    }
}
