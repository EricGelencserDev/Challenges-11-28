import React, { Component } from 'react'
import Rooms from '../store/rooms4rent'
import {Link} from 'react-router-dom'

class RoomsIndex extends Component {
  componentWillMount(){
    this.setState({rooms: Rooms})
  }
  render() {
    let list = this.state.rooms.map(function(room){
      return(
        <li key={room.id}>
          <Link to={`/room/${room.id}`} >
            {room.address}
          </Link>
        </li>
      )
    })
    return (
      <ul>
        {list}
      </ul>
    );
  }
}

export default RoomsIndex;
