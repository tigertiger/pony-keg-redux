import React from "react";
import horseFriendImage from "./../img/horse-friend.jpg";

function Header(){
  return(
    <>
    <div className="container">
      <div id="headerText">
        <img src={horseFriendImage} alt="a man and horse are friends" height="200px" id="horseFriend" />
        <h1>Pony Keg</h1>
        <h2>A Place for Horses</h2>
        <h5>& their friends</h5>
      </div>
    </div>
    </>
  );
}

export default Header;