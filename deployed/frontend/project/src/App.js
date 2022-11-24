import "./App.css";
import DisplayText from "./components/displayText";
// import Clock from "./components/Clock";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "red",
        }}
      >
        This is a test site. WIP.
      </div>
      <div className="App">
        <h1 className="text-3xl font-bold underline">
          General Purpose Display
        </h1>
      </div>
      {/* <div className="Applications">
        <h3>Applications</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h4>Clock</h4>
      </div>
      <div className="clock-style">
        <Clock />
      </div> */}
      <div></div>

      <div style={{ paddingLeft: "80px" }}>
        <h4>Display Text</h4>
      </div>

      <div className="wrapper">
        <DisplayText />
      </div>
    </>
  );
}

export default App;
