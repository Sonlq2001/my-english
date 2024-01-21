import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/RoutesApp";
const App: FC = () => {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
};

export default App;
