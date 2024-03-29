/*  2024-03-19 17:15:39


    <StarRaterCSR 
      auth={true} 
      defaultScore={score} 
      setScore={setScore} 
      starConfig={null}
    />

// Config Object
const starConfig = {
  count: 5,
  score: 0,
  color: {
    filled: "#f5eb3b",
    unfilled: "#DCDCDC",
  },
	size: "24px",
}

2024-03-20 03:26:12
술먹갑...
0.5 단위 별점 표현이 필요할 것 같다. 당연히 SSR 에서이겠지..
style 객체 속성으로 처리가 가능할 것인가?


*/

import React, { useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";
import { DefaultStarConfigType, defaultStarConfig } from "./defaultStarConfig";

type StarRaterCSRPromType = {
  auth: boolean;
  defaultScore: number;
  setScore: (score: number) => void;
  starConfig: DefaultStarConfigType | null;
};

const StarRaterCSR = ({
  auth,
  defaultScore,
  setScore,
  starConfig,
}: StarRaterCSRPromType) => {
  const [hoverRating, setHoverRating] = useState<number>(0);

  const starConfigObj = starConfig ? starConfig : defaultStarConfig;

  const getColor = (index: number) => {
    if (hoverRating >= index) {
      return starConfigObj.color.filled;
    } else if (!hoverRating && starConfigObj.score >= index) {
      return starConfigObj.color.filled;
    } else if (!hoverRating && defaultScore >= index) {
      return starConfigObj.color.filled;
    }

    return starConfigObj.color.unfilled;
  };

  const starRating = useMemo(() => {
    return Array(starConfigObj.count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <FaStar
          key={idx}
          className="cursor-pointer"
          onClick={() => {
            auth ? setScore(idx) : null;
          }}
          style={{ color: getColor(idx), fontSize: starConfigObj.size }}
          onMouseEnter={() => {
            auth ? setHoverRating(idx) : null;
          }}
          onMouseLeave={() => {
            auth ? setHoverRating(0) : null;
          }}
        />
      ));
  }, [defaultScore, starConfigObj, hoverRating]);

  return (
    <>
      <h3>Star</h3>
      {starRating}
    </>
  );
};

export default StarRaterCSR;
