// import { useState } from "react";

import { useState } from "react";
import StarsContainer from "./modules/star-rater/StarsContainer";
import { defaultStarConfig } from "./modules/star-rater/defaultStarConfig";

function App() {
  const [score1, setScore1] = useState<number>(3.4);
  const [score2, setScore2] = useState<number>(1);

  const newConfig = {
    ...defaultStarConfig,
    color: { ...defaultStarConfig.color, filled: "#ff0000" },
  };

  return (
    <>
      <h1>StarRater-CSR</h1>
      <h3>StarsContainer </h3>
      <StarsContainer
        score={score1}
        setScore={setScore1}
        auth={false}
        starConfig={defaultStarConfig}
      />
      <p>Rating - {score1}</p>
      <h3>StarsContainer </h3>
      <StarsContainer
        score={score2}
        setScore={setScore2}
        auth={true}
        starConfig={newConfig}
      />
      <p>Rating - {score2}</p>
    </>
  );
}

export default App;
