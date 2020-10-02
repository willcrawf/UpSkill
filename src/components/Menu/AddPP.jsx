import React from 'react';
import { Segment } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

function click() {
    console.log('click')
}
const AddPP = (props) => {
    return (
        <>
        <Segment>
            <img src={props.user.profilePic} alt="" />
         <form>
          <Button onClick={click()} type="submit">Add profile picture </Button>
          </form>
          <div className = "show">
              <label for="profilePic">URL: </label>
              <input name="profilePic"></input>
          </div>
      </Segment>
      </>
      );
}
 
export default AddPP;