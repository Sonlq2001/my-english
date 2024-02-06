import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import AudioPlay from "@app/components/AudioPlay/AudioPlay";
import RoutesApp from "./routes/RoutesApp";

const App: FC = () => {
  return (
    <BrowserRouter>
      <RoutesApp />
      <AudioPlay />
    </BrowserRouter>
  );
};

export default App;
