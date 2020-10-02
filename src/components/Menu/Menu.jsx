import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import authService from "../../services/authService";
import { Button } from 'semantic-ui-react'

export default class MenuEl extends Component {
  state = { activeItem: 'home', user: authService.getUser()}

  onClickProf = (e) => {
    console.log('clicked')
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='profile'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name={this.state.user.isTutor ? "Posts" : " "}
            active={activeItem === this.name}
            onClick={this.handleItemClick}
          />
        </Menu>

        <Segment>
          <img src={this.state.user.profilePic} />
          <form action={this.onClickProf()}>
            <Button type="submit" >Add profile picture </Button>
          </form>
        </Segment>
      </div>
    )
  }
}

