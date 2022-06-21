  import React from 'react';
  import PropTypes from 'prop-types';
  
const Profile = ({children,fullname,handleName,bio,profession,alerts})=>{
    
    return(
        <div>
<div className="card" style={{width: '18rem'}}>
{children}
  <div className="card-body">
    <h5 className="card-title">{fullname}</h5>
    <h3>{profession}</h3>

    <p className="card-text">{bio}</p>
    <a href="/" className="btn btn-primary" onClick={()=>handleName(fullname)}>User Name</a>
  </div>
</div>
   </div>
    )
}

Profile.propTypes={
  fullname: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
}


Profile.defaultProps = {
  fullname: "Chaima SOUILAH",
  bio: "Motivated, hardworking person with a geological and environmental diploma who is currently learning how to code ",
  profession:"Georesources and Environment Engineer"
};


export default Profile

