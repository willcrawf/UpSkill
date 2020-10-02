import React, { Component } from 'react';
import authService from "../../services/authService";

class Profile extends Component {
    state = {
        user: authService.getUser(),
      }
    render() { 
        return (
            <>
            <h1>Welcome, {this.state.user.name}</h1>
            <h1>Are you a tutor? {this.state.user.isTutor === true ?  "Yes" : "No"} </h1>


            </>
          );
    }
}
 
export default Profile;