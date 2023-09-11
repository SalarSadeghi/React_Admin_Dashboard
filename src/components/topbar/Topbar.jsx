import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import "./topbar.scss";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Salar Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          <span className="topIconBadge">3</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
            <span className="topIconBadge">6</span>
          </div>
          <img src="/assets/images/person1.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
