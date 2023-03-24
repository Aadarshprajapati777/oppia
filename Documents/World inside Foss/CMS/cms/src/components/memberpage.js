import React from "react";
import "./memberpage.css";

export default function MemberPage(props) {
  return (
    <div className="card_container">
      <h1 className="member_name">{props.name}</h1>
       <img src={props.img} alt="members_image" className="member_photo"/>    
    </div>
  );
}
