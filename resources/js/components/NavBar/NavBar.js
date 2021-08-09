import React from 'react';



export default class NavBar extends React.Component{
    constructor(props) {
        super(props);


 
    }
    render() {
        return (
            <div className="
            container-fluid 
            NavBar-container 
            d-flex 
            flex-row
            justify-content-between
            "> 
                <div className="NavBar-container-logo d-flex ">

                    <img className="NavBar-logo" src="img/logo.svg" alt="icon" />
                    <div className="NavBar-logoText">Mepho</div>

                </div>
                <div className="NavBar-searchbar-container d-flex">

                <div className="navSearchContainer d-flex container-fluid">
                    <input className="navSearchContainer-searchInput " type="text" name="name" autoComplete="off"  />
                    <div className="navSearchContainer-button" >
                    <img className="navSearchContainer-icon " src="img/logo.svg" alt="icon"/>
                    </div>

                </div>


                </div>
                <div className="NavBar-loginButton-container d-flex justify-content-around">
                    <div className="NavBar-loginButton-login">
                        Login
                    </div>
                    <div className="NavBar-loginButton-register">
                        Register
                    </div>
                </div>
            </div>
        )
    }

        
    
}
