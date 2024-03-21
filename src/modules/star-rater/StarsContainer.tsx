/*  2024-03-19 17:03:09

1. For static Stars
  <StarRaterCSR  auth={false} defaultScore={score} config={null} />
2. For adjustable Stars
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
  auth: enable | disable : stars adjustment
  defaultScore: initial score
  setScore: set score state function
  starConfig: star configuration object
      ojectType: DefaultStarConfigType


  <AiFillStar style={{ fill: "url(#star-gradient)", fontSize: "24px" }} />

*/

import React, { useState } from "react";
// import StarRaterCSR from "./StarRaterCSR";
import StarRaterCSR from "./StarRaterCSR2";
import { defaultStarConfig } from "./defaultStarConfig";

type StarsContainerPropsType = {
  score: number;
  setScore: (score: number) => void;
  auth: boolean;
  starConfig?: typeof defaultStarConfig;
};

const StarsContainer = ({
  score,
  setScore,
  auth,
  starConfig,
}: StarsContainerPropsType) => {
  const [fillOffset, setFillOffset] = useState<number>(50);

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <StarRaterCSR
            auth={auth}
            defaultScore={score}
            setScore={setScore}
            setFillOffset={setFillOffset}
            starConfig={starConfig ? starConfig : defaultStarConfig}
          />
        </div>
      </div>

      {/* SVG Element for decimal render */}
      <svg width="0" height="0">
        <linearGradient id="star-gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop stopColor={`${defaultStarConfig.color.filled}`} offset="0%" />
          <stop
            stopColor={`${defaultStarConfig.color.filled}`}
            offset={`${fillOffset}%`}
          />
          <stop
            stopColor={`${defaultStarConfig.color.unfilled}`}
            offset={`${fillOffset}%`}
          />
          <stop
            stopColor={`${defaultStarConfig.color.unfilled}`}
            offset="100%"
          />
        </linearGradient>
      </svg>
    </>
  );
};

export default StarsContainer;
