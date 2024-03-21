// import { useState } from "react";

import { useState } from "react";
import StarsContainer from "./modules/star-rater/StarsContainer";
import { defaultStarConfig } from "./modules/star-rater/defaultStarConfig";

function App() {
  const [score, setScore] = useState<number>(1);

  const newConfig = {
    ...defaultStarConfig,
    color: { ...defaultStarConfig.color, filled: "#ff0000" },
  };

  return (
    <>
      <h1>StarRater-CSR</h1>
      <StarsContainer
        score={3.4}
        setScore={setScore}
        auth={false}
        starConfig={defaultStarConfig}
      />
      <StarsContainer
        score={score}
        setScore={setScore}
        auth={true}
        starConfig={newConfig}
      />
    </>
  );
}

export default App;
