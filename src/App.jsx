import { useState } from "react";
function App() {
  const [sc, set] = useState({
    Score: 10,
    Wicket: 1,
    Over: 1
  });

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{sc.Score}
          <h1 className="scoreCount">
            {
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{sc.Wicket}
          <h1 className="wicketCount">
            {
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{sc.Over.toFixed(1)}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button
          onClick={() => {
            set({
              Score: sc.Score + 1,
              Wicket: sc.Wicket,
              Over: sc.Over
            });
          }}
          className="addScore1"
        >
          Add 1
        </button>
        <button
          onClick={() => {
            set({
              Score: sc.Score + 4,
              Wicket: sc.Wicket,
              Over: sc.Over
            });
          }}
          className="addScore4"
        >
          Add 4
        </button>
        <button
          onClick={() => {
            set({
              Score: sc.Score + 6,
              Wicket: sc.Wicket,
              Over: sc.Over
            });
          }}
          className="addScore6"
        >
          Add 6
        </button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button
          onClick={() => {
            set({
              Score: sc.Score,
              Wicket: sc.Wicket + 1,
              Over: sc.Over
            });
          }}
          className="same"
        >
          Add 1 wicket
        </button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button
          onClick={() => {
            set({
              Score: sc.Score,
              Wicket: sc.Wicket,
              Over: sc.Over + 0.1
            });
          }}
          className="same"
        >
          Add 1
        </button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
