import React, { useEffect } from "react";

import History from "./History";
import LaunchesPreview from "./LaunchesPreview";

function HomePage() {
  return (
    <div>
      <History />
      <hr />
      <LaunchesPreview />
    </div>
  );
}

export default HomePage;
