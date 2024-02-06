import Searchtweeter from "../Search-tweeter";
import Trends from "../Trends";




export default function Trend(){

    return(
       <>
        
        <br />
      <section className="search-tweeter">
        <div className="tweet-title">
          <img className="search-tweeter" src="src/assets/Search-Icon.png" alt="" />
          <input className="search-tweeter" placeholder="search tweeter" type="text" />
        </div>
      </section>
      
      <br/>
      <section className="search-tweeter">
        <div className="tweet-editor-buttons">
          <h4>Trends for you</h4>
          <img src="src/assets/Settings.png" alt="" />
        </div>
        <br />
        <Trends />
        <Trends />
        <Trends />
        <Trends />
        <div>
          <h3 className="show-more"> Show more</h3>
        </div>
      </section>

      <br/>
      <section className="search-tweeter">
        <h3>Who to follow</h3>
        <div className="tweet-editor-buttons">
          <div className="tweet">
            <img src="src/assets/Tweet-Profile-Photo.png" alt="avatar" />
            <div>
              <div className="tweet-title">
                <h4 className="tweet-title-author">The New York Times</h4>
                <img src="src/assets/Verified.png" alt="verified" />
              </div>
              <p className="tweet-title-details">@nytimes</p>
            </div>
          </div>
          <button className="button-follow">Follow</button>
        </div>
        <br />
        <div className="tweet-editor-buttons">
          <div className="tweet">
            <img className="tweet-avatar" src="src/assets/Profile-Photo (2).png" />
            <div>
              <div className="tweet-title">
                <h4 className="tweet-title-author">CNN</h4>
                <img src="src/assets/Verified.png" alt="verified" />
              </div>
              <p className="tweet-title-details">@CNN</p>
            </div>
          </div>
          <button className="button-follow">Follow</button>
        </div>
        <br />
        <div className="tweet-editor-buttons">
          <div className="tweet">
            <img src="src/assets/Tweet-Profile-Photo (3).png" alt="avatar" />
            <div>
              <div className="tweet-title">
                <h4 className="tweet-title-author">Twitter</h4>
                <img src="src/assets/Verified.png" alt="verified" />
              </div>
              <p className="tweet-title-details">@Twitter</p>
            </div>
          </div>
          <button className="button-follow">Follow</button>
        </div>
        <h3 className="show-more"> Show more</h3>
      </section>
      <br />
      <div className="cookie">
        <p className="tweet-title-details">Term of Service Privacy Policy Cookie Policy</p>
        <p className="tweet-title-details">Imprint Ads info More.. @2021 Twitter.Inc.</p>
      </div>
       
       </>
    )
}