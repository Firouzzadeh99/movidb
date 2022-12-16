import React from "react";
import { useRoutes } from "react-router-dom";
 import TopHeader from "./components/TopHeader";
import "./App.scss";
import routes from "./routes/routes";

function App() {
  const router = useRoutes(routes);
  return (
    <>
            <TopHeader />
          <div className="App">{router}</div>
     </>
  );
}

export default App;
