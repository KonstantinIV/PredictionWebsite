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
                {JSON.stringify(this.state.result)}
            </div>
        )
    }
}
