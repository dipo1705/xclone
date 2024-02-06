import {NavLink} from "react-router-dom";




function navBar() {
  return (
    <nav className="sidebar">
      <div className="leftsidebar-nav">
        <img src="src/images/Normal.png">
        </img>
      </div>
      
      <NavLink to = "/home">
      <div className="leftsidebar-nav">
        <img src="src/images/Vector.png">
          </img>
        <h4>Home</h4>
      </div>
        </NavLink>

      <NavLink to = "/explore">
      <div className="leftsidebar-nav">
        <img src="src/images/Explore.png">
          </img>
        <h4>Explore</h4>
      </div>
        </NavLink>

      <NavLink to = "/notifications">
      <div className="leftsidebar-nav">
        <img src="src/images/Notifications.png">
          </img>
        <h4>Notifications</h4>
      </div>
        </NavLink>

      <NavLink to = "/messages">
      <div className="leftsidebar-nav">
        <img src="src/images/Messages.png">
          </img>
        <h4>Messages</h4>
      </div>
        </NavLink>

      <NavLink to = "/bookmarks">
      <div className="leftsidebar-nav">
        <img src="src/images/Bookmarks.png">
          </img>
        <h4>Bookmarks</h4>
      </div>
        </NavLink>

      <NavLink to = "/lists">
      <div className="leftsidebar-nav">
        <img src="src/images/Lists.png">
          </img>
        <h4>Lists</h4>
      </div>
         </NavLink>

      <NavLink to = "/profile">
      <div className="leftsidebar-nav">
        <img src="src/images/Profile.png">
          </img>
        <h4>Profile</h4>
      </div>
        </NavLink>
      
      <NavLink to = "/more">
      <div className="leftsidebar-nav">
        <img src="src/images/More.png">
          </img>
        <h4>More</h4>
      </div>
        </NavLink>

      <div>

        <button className="buttonleftsidebar">tweet</button>

      </div>

    </nav>
  );
}

export default navBar;