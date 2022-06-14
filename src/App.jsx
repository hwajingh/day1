import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [numClicks, setNumClicks] = React.useState(0);
  const onClick = () => {
    const newValue = numClicks + 1;
    setNumClicks(newValue);
  };
  const onDoubleClick = () => {
    const clicks = numClicks - 3;
    setNumClicks(clicks);
  };

  return (
    <div className="App">
      <button onDoubleClick={onDoubleClick} onClick={onClick}>
        {numClicks}
      </button>
    </div>
  );
}

export default App;
