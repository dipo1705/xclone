import { NavLink } from "react-router-dom";
import TweetBouton from "../tweetBouton";




export default function Sidebar() {
  return (

    <>
      <nav className="navbar">
        <ul>
          <li>
            <div className="navigation-sidebar">
              <img src="src/images/Normal.png" alt="" className="oiseau-twitter"></img>
            </div>
          </li>

          <li>
            <NavLink className="navigation-sidebar" to="/">
              <img src="src/images/Vector.png"></img>
              <h5>Home</h5>
            </NavLink>
          </li>

          <li>
            <NavLink className="navigation-sidebar" to="/explore">
              <img src="src/images/Explore.png"></img>
              <h5>Explore</h5>
            </NavLink>
          </li>

          <li>
            <NavLink className="navigation-sidebar" to="/notifications">
              <img src="src/images/Notifications.png"></img>
              <h5>Notifications</h5>
            </NavLink>
          </li>

          <li>
            <NavLink className="navigation-sidebar" to="/messages">
              <img src="src/images/Messages.png"></img>
              <h5>Messages</h5>
            </NavLink>
          </li>

          <li>
            <NavLink className="navigation-sidebar" to="/bookmarks">
              <img src="src/images/Bookmarks.png"></img>
              <h5>Bookmarks</h5>
            </NavLink>
          </li>

          <li>
            <NavLink className="navigation-sidebar" to="/lists">
              <img src="src/images/Lists.png"></img>
              <h5>Lists</h5>
            </NavLink>
          </li>

          <li>
            <NavLink className="navigation-sidebar" to="/profile/@Bradley...">
              <img src="src/images/Profile.png"></img>
              <h5>Profile</h5>
            </NavLink>
          </li>

          <li>
            <NavLink className="navigation-sidebar" to="/more">
              <img src="src/images/More.png"></img>
              <h5>More</h5>
            </NavLink>

          </li>
        </ul>
        <TweetBouton />
      </nav>

    </>

  );
}

