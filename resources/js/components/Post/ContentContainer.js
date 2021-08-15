import React from 'react';
import AjaxApi from '../AjaxApi/AjaxApi';


import Post from './Post';

export default class ContentContainer extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        //console.log("HI");

        let params = {};
        AjaxApi("/post", "GET", params, (result, status) => {
            this.setState({
                isLoaded: true,
                items: result
            });
            console.log(result);
        })

    }
    //                {JSON.stringify(this.state.result)}

    render() {
        console.log(this.state.items)
        if (!this.state.isLoaded) {
            return <div>Loading</div>;
        } else {
            return (
                <div>
                    <div className="content-container container-fluid">



                        {this.state.items.map(item => (

                            <Post key={item.id} item={item} />

                        ))}



                    </div>
                </div>

            )
        }
    }
}
