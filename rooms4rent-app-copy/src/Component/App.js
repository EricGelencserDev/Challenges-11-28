import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import Header from './Header'
import RoomsIndex from './RoomsIndex'
import RoomDetail from './RoomDetail'
import Rooms from '../store/rooms4rent'
import '../App.css'


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            rooms: Rooms
        }
    }

  render() {
    return (
      <Router>
        <div>
            <div id="farts">
                  <h1 id="logo">rooms4rent &trade;</h1>
            </div>
                    <Route exact path='/' component={RoomsIndex}/>
                    <Route path='/room/:id'  component={RoomDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
