import React from "react";
import "./App.css";

type Props = {
  content: string;
  videopath: string;
};
function Component({ content, videopath }: Props) {
  return (
    <div className="App">
      <h2> {content}</h2>
      <video width="400px" height="200px" controls>
        <source src={videopath} />
      </video>
    </div>
  );
}

export default Component;
