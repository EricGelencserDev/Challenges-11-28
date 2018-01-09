import React, { Component } from 'react'
import Rooms from '../store/rooms4rent'
import {Link} from 'react-router-dom'
import '../App.css'

class RoomDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      rooms: Rooms
    }
  }
  componentWillMount(){
    const id = this.props.match.params.id
    this.setState({roomId: id})
    let room = this.state.rooms.find(function(listing){
      return listing.id === parseInt(id)
    })
    if(room){
      this.setState({room: room})
    }
  }

  render() {
    return (
      <div id="details">
        <Link to='/'>Home</Link>
        <h2>Address: {this.state.room.address} </h2>
        <img src={this.state.room.photo} alt="fancy"/>
        <div></div>
        <h3>Description:</h3>
        <h4>Size: {this.state.room.size}</h4>
        <h4>City: {this.state.room.city}</h4>
        <h4>Details: {this.state.room.details}</h4>
      </div>
    );
  }
}

export default RoomDetail;
