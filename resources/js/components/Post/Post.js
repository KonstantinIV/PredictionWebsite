import React from 'react';
import AjaxApi from '../AjaxApi/AjaxApi' ;

import PostTitle from './PostTitle' ;
import PostCreator from './PostCreator' ;
import PostReleaseDate from './PostReleaseDate' ;
import PostText from './PostText';
import PostVoteFirstStage from './PostVoteFirstStage';
import PostVoteSecondStage from './PostVoteSecondStage';



export default class Posts extends React.Component{
    constructor(props) {
        super(props);


    this.state = {
      result:{}
    };
    }
    componentDidMount(){
        console.log("HI");

        let params = {};
       AjaxApi("/post","GET",params, (result,status) => {
        this.setState( {
            result : result
          });
            console.log(result);
        })

    }
    
    render(){
        return( 
            <div> 
                <div className="content-container container-fluid">

                <div className="post-container d-flex flex-column">
                    
                    <PostTitle />
                    <PostCreator />
                    <PostReleaseDate />
                    <PostText />
                  
                    <PostVoteFirstStage />
                    <PostVoteSecondStage />






                


                </div>



                {JSON.stringify(this.state.result)}
            </div>
            </div>

        )
    }
}
