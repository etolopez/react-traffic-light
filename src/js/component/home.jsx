import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState(null);
  const [addPurple, setAddPurple] = useState(false);
 
  const handleColor = function () {
    const colorChanger = ["red", "yellow", "green"];
    let colorIndex = 0;
  
  let interval =  setInterval(() => {
      console.log(colorChanger[colorIndex])
      if (colorIndex <=2 ) {
        setColor(colorChanger[colorIndex]);
        colorIndex++;
      } else {
        setColor("red");
        colorIndex = 1;
      }
    }, 1000);
  };

  return (
    <div className="container">
      <div className="row m-auto traffic-top"></div>
      <div className="row">
        <div className="col"></div>
        <div className="col rounded bg-dark m-1 p-2">
          <div
            className={`row red-light bg-danger rounded-circle m-auto pb-3 ${
              color == "red" ? "traffic-on" : "traffic-off"
            }`}
            onClick={() => {
              setColor("red");
            }}
          ></div>
          <div
            className={`row yellow-light bg-warning rounded-circle m-auto ${
              color == "yellow" ? "traffic-on" : "traffic-off"
            }`}
            onClick={() => {
              setColor("yellow");
            }}
          ></div>
          <div
            className={`row green-light bg-success rounded-circle m-auto ${
              color == "green" ? "traffic-on" : "traffic-off"
            }`}
            onClick={() => {
              setColor("green");
            }}
          ></div>
          {addPurple ? (
            <div
              className={`row purple-light bg-info rounded-circle m-auto ${
                color == "purple" ? "traffic-on" : "traffic-off"
              }`}
              onClick={() => {
                setColor("purple");
              }}
            ></div>
          ) : (
            ""
          )}
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>
        {addPurple == true ? (
          <button
            className="btn btn-danger"
            onClick={() => {
              setAddPurple(false);
            }}
          >
            Remove Blue Light
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => {
              setAddPurple(true);
            }}
          >
            Add Blue Light
          </button>
        )}
        <div className="col"></div>
        <button className="btn btn-warning" onClick={()=> handleColor() }>Start Color Changer</button>
      </div>
    </div>
  );
};

export default Home;
