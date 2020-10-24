import React from 'react';

function App() {
  return (
    <React.Fragment>
        <div className="title">
          Image Animations
        </div>

        <div className="images">
          <div className="image-container">
            <img src="/img/pic1.jpg" alt="" />
            <img className="transition-image" src="/img/pic2.jpg" alt="" />
          </div>

          <div className="image-container fade">
            <img src="/img/pic3.jpg" alt="" />
          </div>
        </div>
        
    </React.Fragment>
    
  );
}

export default App;
