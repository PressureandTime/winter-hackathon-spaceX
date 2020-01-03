import React, { useEffect } from "react";

import History from "./History";
import LaunchesPreview from "./LaunchesPreview";

function HomePage() {
  return (
    <div>
      <History />
      <LaunchesPreview />
    </div>
  );
}

export default HomePage;
