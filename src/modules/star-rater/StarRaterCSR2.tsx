/*  

decimal expression added 

    // const decimal = defaultScore - Math.floor(defaultScore);
    // const flooredScore = Math.round(defaultScore - decimal);
*/

import React, { useEffect, useMemo, useState } from "react";
import { DefaultStarConfigType, defaultStarConfig } from "./defaultStarConfig";
import { AiFillStar } from "react-icons/ai";

type StarRaterCSRPromType = {
  auth: boolean;
  defaultScore: number;
  setScore: (score: number) => void;
  setFillOffset: (offset: number) => void;
  starConfig: DefaultStarConfigType | null;
};

type StarStyleType = {
  fontSize: string;
  color?: string;
  fill: string;
};

const StarRaterCSR = ({
  auth,
  defaultScore,
  setScore,
  setFillOffset,
  starConfig,
}: StarRaterCSRPromType) => {
  const [hoverRating, setHoverRating] = useState<number>(0);

  const starConfigObj = starConfig || defaultStarConfig;

  const decimal = defaultScore - Math.floor(defaultScore);
  //   const flooredScore = Math.round(defaultScore - decimal);
  const ceiledScore = Math.ceil(defaultScore);
  const decimalPercentage = Math.round(decimal * 100);

  useEffect(() => {
    if (decimalPercentage > 0) {
      setFillOffset(decimalPercentage);
    }
  }, [decimalPercentage]);

  const defaultStyle: StarStyleType = {
    fontSize: starConfigObj.size,
    color: starConfigObj.color.unfilled,
    fill: "",
  };

  const getColor = (index: number) => {
    if (hoverRating >= index) {
      return starConfigObj.color.filled;
    } else if (!hoverRating && starConfigObj.score >= index) {
      return starConfigObj.color.filled;
    } else if (!hoverRating && defaultScore >= index) {
      return starConfigObj.color.filled;
    } else if (!hoverRating && decimal && ceiledScore === index) {
      return starConfigObj.color.filled;
    }

    return starConfigObj.color.unfilled;
  };

  const starRating = useMemo(() => {
    return Array(starConfigObj.count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => {
        let curStyle = { ...defaultStyle };
        if (!auth && decimalPercentage && idx === ceiledScore) {
          curStyle = { ...defaultStyle, fill: "url(#star-gradient)" };
        }
        return (
          <AiFillStar
            className="cursor-pointer"
            key={idx}
            onClick={() => {
              auth ? setScore(idx) : null;
            }}
            style={{ ...curStyle, color: getColor(idx) }}
            onMouseEnter={() => {
              auth && setHoverRating(idx);
            }}
            onMouseLeave={() => {
              auth && setHoverRating(0);
            }}
          />
        );
      });
  }, [defaultScore, starConfigObj, hoverRating]);

  return <>{starRating}</>;
};

export default StarRaterCSR;
