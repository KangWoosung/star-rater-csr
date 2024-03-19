// import { useState } from "react";

import StarsContainer from "./modules/star-rater/StarsContainer";
import { defaultStarConfig } from "./modules/star-rater/defaultStarConfig";

function App() {
  // const [count, setCount] = useState(0);
  const newConfig = {
    ...defaultStarConfig,
    color: { ...defaultStarConfig.color, filled: "#ff0000" },
  };

  return (
    <>
      <h1>StarRater-CSR</h1>
      <StarsContainer auth={false} />
      <StarsContainer auth={true} starConfig={newConfig} />
    </>
  );
}

export default App;
