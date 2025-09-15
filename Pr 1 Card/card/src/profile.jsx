import React from "react";
import "./profile.css";
 function profile({ name, title, experience, profilePicture }) {
  return (
    <div className="card-container">
     <div className="profile-pic">
       <img src={profilePicture} alt={name}   />
     </div>
      <h2 className="name">{name}</h2>
      <p className="title">{title}</p>
      <p className="experience">{experience}</p>
    </div>
  );
}

export default  profile;