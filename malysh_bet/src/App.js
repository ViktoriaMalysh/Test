import "./App.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [flag, setFlag] = useState(1);

  return (
    // <div className="App">
      <header className="header1">
        <div className="divHeader">
          <div className="aOne">
            
            <a className="a-link" href="/rides">
            {flag === 1 ? <div className="hoverDiv"></div> : <div></div>}
              <span className={flag ? "spanItemH" : "spanItem"}>
                Home
                </span>
            </a>
          </div>

          <div className="aTwo">
            {flag === 2 ? <div className="hoverDiv"></div> : <div></div>}
            <a className="a-link" href="/">
              <span className={flag ? "spanItemH" : "spanItem"}>Sports</span>
            </a>
          </div>

          <div className="aTree">
            {flag === 3 ? <div className="hoverDiv"></div> : <div></div>}
            <a className="a-link" href="/">
              <span className={flag ? "spanItemH" : "spanItem"}>In-Play</span>
            </a>
          </div>

          <div className="aFour">
            {flag === 3 ? <div className="hoverDiv"></div> : <div></div>}
            <a className="a-link" href="/">
              <span className={flag ? "spanItemH" : "spanItem"}>Log in</span>
            </a>
          </div>

          <div className="aFive">
            {flag === 3 ? <div className="hoverDiv"></div> : <div></div>}
            <a className="a-link" href="/">
              <span className={flag ? "spanItemH" : "spanItem"}>Register</span>
            </a>
          </div>


        </div>
      </header>
    // </div>
  );
}

export default App;
