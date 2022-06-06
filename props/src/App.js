
import './App.css';
import React from 'react';
import Profile from './profile/ProfileComponent';
import images from './profile/image.jpg'



function App() {
  
  return (
    <div className="App">
    <Profile  fullname = "chaima Souilah" profession="Georesources and Environment Engineer" bio="Motivated, hardworking person with a geological and environmental diploma who is currently learning how to code "  >
    <img src={images} className="avatar" alt="images"/>
    </Profile>
      
    </div>
  );
}

export default App;
