    const Profile = (props )=>{
    console.log(props);
    
    return(
        <div>
<div className="card" style={{width: '18rem'}}>
{props.children}
  <div className="card-body">
    <h5 className="card-title">{props.fullname}</h5>
    <h3>{props.profession}</h3>

    <p className="card-text">{props.bio}</p>
    <a href="/" className="btn btn-primary" onClick={props.alerts}>User Name</a>
  </div>
</div>
   </div>
    )
}

export default Profile

