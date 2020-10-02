import React, { Component } from 'react';
import authService from "../../services/authService";
import MenuEl from "../../components/Menu/Menu"
class Profile extends Component {
    state = {
        user: authService.getUser(),
      }
      
    render() { 
        return (
            <>
            <h1>Welcome, {this.state.user.name}</h1>
            <h1>Are you a tutor? {this.state.user.isTutor ?  "Yes" : "No"} </h1>
            
            < MenuEl click = {this.click} user={this.state.user}/>
            </>
          );
    }
}
 
export default Profile;