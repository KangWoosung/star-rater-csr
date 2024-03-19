/*  2024-03-19 17:03:09

1. For SSR
  <StarRaterCSR  auth={false} defaultScore={score} config={null} />
2. For CSR
  <StarRaterCSR  auth={true} defaultScore={score} setScore={setScore} config={null} />
3. Hydration
  <StarRaterCSR  auth={true} defaultScore={scoreState}  setScore={setScore} config={null} />
    - setScoreState(scoreState) renders container component and hydrate will be done.


Usage:
  <StarRaterCSR
    auth={auth}
    defaultScore={score}
    setScore={setScore}
    starConfig={starConfig ? starConfig : defaultStarConfig}
  />
  auth: enable | disable star manipulation
  defaultScore: initial score
  setScore: set score state function
  starConfig: star configuration object
      ojectType: DefaultStarConfigType


*/

import React, { useState } from "react";
import StarRaterCSR from "./StarRaterCSR";
import { defaultStarConfig } from "./defaultStarConfig";

type StarsContainerPropsType = {
  auth: boolean;
  starConfig?: typeof defaultStarConfig;
};

const StarsContainer = ({ auth, starConfig }: StarsContainerPropsType) => {
  const [score, setScore] = useState<number>(2);

  const SSR_CSR = auth ? "CSR" : "SSR";

  return (
    <>
      <h3>StarsContainer {SSR_CSR}</h3>

      <div className="row">
        <div className="col text-center">
          <StarRaterCSR
            auth={auth}
            defaultScore={score}
            setScore={setScore}
            starConfig={starConfig ? starConfig : defaultStarConfig}
          />
          <p>Rating - {score}</p>
        </div>
      </div>
    </>
  );
};

export default StarsContainer;
