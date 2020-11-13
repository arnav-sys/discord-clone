import React from "react";
import "./ChatHeader.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SearchIcon from "@material-ui/icons/Search";
import SendIcon from "@material-ui/icons/Send";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";

const ChatHeader = ({ channelName }) => {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {channelName}
        </h3>
      </div>

      <div className="chatHeader__right">
        <NotificationsIcon />
        <EditLocationIcon />
        <PeopleAltIcon />

        <div className="chatHeader__search">
          <input placeholder="Search" />
          <SearchIcon />
        </div>

        <SendIcon />
        <HelpRoundedIcon />
      </div>
    </div>
  );
};

export default ChatHeader;
