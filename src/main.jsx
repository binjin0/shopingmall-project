import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RecoilRoot } from "recoil";
// import { RecoilPersistWrapper } from "./recoil/RecoilPersist.jsx";
import "./index.css";
// import "./reset.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      {/* <RecoilPersistWrapper> */}
      <App />
      {/* </RecoilPersistWrapper> */}
    </RecoilRoot>
  </React.StrictMode>
);
