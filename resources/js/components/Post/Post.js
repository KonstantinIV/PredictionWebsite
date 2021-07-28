import React from 'react';
import AjaxApi from '../AjaxApi/AjaxApi' ;


export default class Posts extends React.Component{
    constructor(props) {
        super(props);

 
    }
    componentDidMount(){
        console.log("HI");

        let params = {};
       AjaxApi("/post","GET",params, (result,status) => {
            console.log(result);
        })

    }
    
    render(){
        return( 
            <div> 
                Posts
            </div>
        )
    }
}
