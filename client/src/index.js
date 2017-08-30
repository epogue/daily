import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const render = Component => {
  return ReactDOM.render(<Component />, document.getElementById("root"));
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    var NextApp = require("./App").default;
    render(NextApp);
  });
}

registerServiceWorker();
