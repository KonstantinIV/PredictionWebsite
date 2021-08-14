import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter as Router}  from 'react-router-dom';

import Switch   from 'react-router-dom/Switch';
//import  Router from 'react-router-dom/Router';
import   Route from 'react-router-dom/Route';


import ContentContainer from './Post/ContentContainer' ;
import Comment from './Comment/Comment' ;
import User from './User/User' ;

import NavBar from './NavBar/NavBar' ;


import AjaxApi from './AjaxApi/AjaxApi' ;


class MainRouter extends React.Component{
    constructor(props) {
        super(props);

        this.AjaxApi = AjaxApi.bind(this);

 
    }

    render() {
        return (
            <div>
                <NavBar />
            <Router>
                <div>


                    {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
                    <Switch>
                    <Route
                            path="/"
                            render={(props) => (
                                <ContentContainer  {...props} 
                                //api={this.AjaxApi}

                                />)}

                        >
                        </Route>
                        <Route
                            path="/post" 
                            render={(props) => (
                                <Post  {...props}

                                />)}

                        >
                        </Route>
                        <Route
                            path="/comment"
                            render={(props) => (
                                <Comment  {...props}

                                />)}
                        >

                        </Route>
                        <Route
                            path="/user"
                            render={(props) => (
                                <User  {...props}

                                />)}
                        >

                        </Route>



                    </Switch>
                </div>
            </Router>
            </div>
        )
    }

        
    
}

//ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<MainRouter />, document.getElementById('example'));



