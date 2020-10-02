import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import authService from "../../services/authService";

export default class MenuEl extends Component {
  state = { activeItem: 'home', user: authService.getUser()}

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
        </Segment>
      </div>
    )
  }
}

