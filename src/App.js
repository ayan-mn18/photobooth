import React,{ useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import HomeScreen from './Screens/HomeScreen'
import './App.css';
import PhotoScreen from './Screens/PhotoScreen';
import ShareScreen from './Screens/ShareScreen';
import VideoComponent from './Components/VideoComponent';

const App = () => {

  

  return (
    <Router>
        <Route path='/home' component={HomeScreen} />
        <Route path='/ps' component={PhotoScreen} />
        <Route path='/share' component={ShareScreen} />
        <Route path='/video' component={VideoComponent} />
    </Router>
  )
}

export default App
