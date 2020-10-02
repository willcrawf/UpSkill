import React from 'react';
import { Segment } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'


const AddPP = (props) => {
    return (
        <>
        <Segment>
            <img src={props.user.profilePic} alt="" />
         <form>
          <Button 
        //  onClick={props.click()}
            type="submit">Add profile picture 
          </Button>
          </form>
          <div className = {props.active === true ? "show" : "hide"}>
              <label for="profilePic">URL: </label>
              <input name="profilePic" value={props.user.profilePic}></input>
              <button onClick= {console.log("profile pic feature needs to be added")}>Add</button>
          </div>
      </Segment>
      </>
      );
}
 
export default AddPP;