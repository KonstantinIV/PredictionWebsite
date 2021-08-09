import React from 'react';
import AjaxApi from '../AjaxApi/AjaxApi' ;


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
                <div className="post-container d-flex">
                    <div className="post-container-title">

                    </div>

                    <div className="post-container-postUser">

                    </div>

                    <div className="post-container-postDate">

                    </div>

                    <div className="post-container-text">

                    </div>

                    <div className="post-container-vote-container">
                        <div className="post-container-likeButton"></div>
                        <div className="post-container-likeCount-container">
                            <div className="post-container-likecount-number-container">

                            </div>
                            <div className="post-container-likecount-visualBar">
                                
                            </div>
                        </div>
                        <div className=""></div>


                    </div>


                </div>



                {JSON.stringify(this.state.result)}
            </div>
        )
    }
}
