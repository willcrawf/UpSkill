import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import authService from "../../services/authService";
import './Menu.css'
import AddPP from './AddPP'
  
export default class MenuEl extends Component {
  state = { activeItem: 'home', user: authService.getUser(), active: false}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  

  render() {
    const { activeItem } = this.state.activeItem
    

    
    
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
        <AddPP active = {this.state.active} user={this.state.user} click={this.state.click}/>
      </div>
    )
  }
}

