import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./containers/List";

const App = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar sticky-top navbar-dark bg-dark">
        <h1 className="navbar-brand text-light mb-0">movieList</h1>
      </nav>
      <List />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
