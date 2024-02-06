

function TweetEditor() {
    return (
  
        <div className="tweet-editor">
          <img src= 'src/assets/profile-photo.png' className='avatar'/>
          
        <div className = 'tweet-editor-form'>
           <input type="text" placeholder="what's happening" className='tweet-editor-input'/>
  
          <div className="tweet-editor-buttons">
          
          <div className="tweet-editor-actions">
              
  <button><img src= 'src/assets/Top-Tweets1.png'/></button>
            
  <button><img src= 'src/assets/Top-Tweets2.png'/></button>
  
  <button><img src= 'src/assets/Top-Tweets3.png' /></button>
  
  <button><img src= 'src/assets/Top-Tweets4.png' /></button>
  
  <button><img src= 'src/assets/Top-Tweets5.png' /></button>
         </div>
            
        <button className="button">tweet</button>  
          </div>
          
          </div>
         </div>
     
    );
  }
  
  export default TweetEditor;