import "./App.css";

function App() {
  return (
    <div className="App">
      <h2> Bekir Sıdkı Sezgin 8. Mısra</h2>

      <video width="400px" height="200px" controls>
        <source
          src="https://d3rklpiaxtqmrs.cloudfront.net/Bekir-S%C4%B1dk%C4%B1-Sezgin-11.%20M%C4%B1sra.mp4"
          type="video/mp4"
        />

        {/* <source
          src="https://d3rklpiaxtqmrs.cloudfront.net/Bekir-Sıdkı-Sezgin-8.-Mısra.webm"
          type="video/webm"
        ></source> */}
      </video>
    </div>
  );
}

export default App;
