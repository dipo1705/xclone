

function TweetEditor() {
  return (

      <div className="tweet-editor">
        <img src= 'src/images/profile-photo.png' className='avatar'/>

      <div className = 'tweet-editor-form'>
         <input type="text" placeholder="what's happening" className='tweet-editor-input'/>

        <div className="tweet-editor-buttons">

        <div className="tweet-editor-actions">

<button><img src= 'src/images/Top-Tweets1.png'/></button>

<button><img src= 'src/images/Top-Tweets2.png'/></button>

<button><img src= 'src/images/Top-Tweets3.png' /></button>

<button><img src= 'src/images/Top-Tweets4.png' /></button>

<button><img src= 'src/images/Top-Tweets5.png' /></button>
       </div>

      <button className="button">tweet</button>  
        </div>

        </div>
       </div>

  );
}

export default TweetEditor;