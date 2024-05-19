import { Route, Routes } from "react-router-dom";

import Component from "./component/index.tsx";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Component
              content="Bekir Sıdkı Sezgin 1. Mısra"
              videopath="https://d3rklpiaxtqmrs.cloudfront.net/Bekir%20S%C4%B1dk%C4%B1%20Sezgin%201.%20M%C4%B1sra.mp4"
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
