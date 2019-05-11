import React from "react";
import ReactDOM from "react-dom";

const init = () => {
  console.log(`init`);
  ReactDOM.render(
      <div>Hello Wrold!</div>,
      document.querySelector(`#root`)
  );
};

init();
