import { CalendarViewDaySharp, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from "@material-ui/icons";
import React from "react";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="addButtonUser">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
              alt=""
              className="userShowImage"
            />
            <div className="userShowTopTitle">
              <span className="usershowUsername"> Ann Becker </span>
              <span className="usershowTitle"> Software Engineer </span>
            </div>
          </div>
          <div className="userShowBottom">
              <span className="userShowInfoTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">annabeck99</span>
              </div>
              <div className="userShowInfo">
                <CalendarViewDaySharp className="userShowIcon" />
                <span className="userShowInfoTitle">10.12.2003</span>
              </div>
              <span className="userShowInfoTitle">Contact Details</span>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">annabeck99@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+234 8167188741</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">29 Bailey Street,Abule Ijesha,Yaba,Lagos</span>
              </div>
          </div>
        </div>
        <div className="userUpdate"></div>
      </div>
    </div>
  );
}
