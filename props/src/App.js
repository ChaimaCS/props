import './App.css';
import React from 'react';
import Profile from './profile/ProfileComponent';
import images from './profile/image.jpg'

function App() {
const handleName = (fullname) => {
  alert(`this profile user is ${fullname}`);
};  

  return (
    <div className="App">
    <Profile  fullname = "Chaima Souilah" handleName={handleName} profession="Georesources and Environment Engineer" bio="Motivated, hardworking person with a geological and environmental diploma who is currently learning how to code " alerts={handleName} >
    <img src={images} className="avatar" alt="images"/>
    </Profile>
      
    </div>
  );
}

export default App;
