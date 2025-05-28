import { type FC } from "react";
import { appRoutes } from "./routes";
import { useRoutes } from "react-router";

const App: FC = () => {
  const routing = useRoutes(appRoutes);
  
  return routing;
};

export default App;
