import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

injectGlobal`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  img {
      max-width: 100%;
      height: auto;
  }
`;

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
