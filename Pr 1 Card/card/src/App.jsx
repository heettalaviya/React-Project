import React from "react";
import ProfileCard from "./profile.jsx";
import "./App.css";

function App() {
  return (
    <div className="card-grid ">
      <ProfileCard
        name="kriti patel"
        title="Bsc-chemistry"
        experience="5 Years Experience"
        profilePicture="1.jpeg"
      />
      <ProfileCard
        name="rajvi shiroya"
        title="Bsc-chemistry"
        experience="3 Years Experience"
        profilePicture="2.jpg"
      />
      <ProfileCard
        name="rajesh shah"
        title="Bsc-Chemistry"
        experience="7 Years Experience"
        profilePicture="3.jpg"
      />
      <ProfileCard
        name="pratik patel"
        title="Bsc-IC"
        experience="9 Years Experience"
        profilePicture="4.jpg"
      />
      <ProfileCard
        name="ramesh giri"
        title="B.com, M-com,"
        experience="2 Years Experience"
        profilePicture="5.jpg"
      />
      <ProfileCard
        name="shailesh lodha"
        title="Computer Engineering"
        experience="10 Years Experience"
        profilePicture="6.jpg"
      />
    </div>
  );
}
export default App;