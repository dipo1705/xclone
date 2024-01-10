





function Sidebar() {
  return (
    <>
      <div>
        <div className='sidebar'>
          <img src="src/images/Normal.png"></img>
        </div>

        <div className='sidebar'>
          <img src="src/images/Vector.png"></img>
          <h5>Home</h5>
        </div>

        <div className='sidebar'>
          <img src="src/images/Explore.png"></img>
          <h5>Explore</h5>
        </div>

        <div className='sidebar'>
          <img src="src/images/Notifications.png"></img>
          <h5>Notifications</h5>
        </div>

        <div className='sidebar'>
          <img src="src/images/Messages.png"></img>
          <h5>Messages</h5>
        </div>

        <div className='sidebar'>
          <img src="src/images/Bookmarks.png"></img>
          <h5>Bookmarks</h5>
        </div>

        <div className='sidebar'>
          <img src="src/images/Lists.png"></img>
          <h5>Lists</h5>
        </div>

        <div className='sidebar'>
          <img src="src/images/Profile.png"></img>
          <h5>Profile</h5>
        </div>

        <div className='sidebar'>
          <img src="src/images/More.png"></img>
          <h5>More</h5>
        </div>

        <button className="buttonleftsidebar">tweet</button>
      </div>
    </>
  );
}

export default Sidebar;