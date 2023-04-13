import React from "react";
import PropTypes from "prop-types";




const Profile = (props) =>{
    const handleName=()=>{
        alert(props.fullName);
    }

    return(
        <div style={{padding:"30px"}}>
          <div>
            <img src={props.children} alt="profile" style={{ width: "150px", borderRadius: '10px' }}/> 
     <h2>{props.fullName}</h2>
      <p>{props.bio}</p>
      <h3>{props.profession}</h3>
      <button onClick={() => handleName(props.fullName)}>Click me</button>
        </div>
        </div>
    );
}

Profile.defaultProps = {
    fullName: 'Mohamed Haddaji',
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    profession: 'Web developer',
  };

  Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    handleName: PropTypes.func.isRequired,
  };
  
  export default Profile;