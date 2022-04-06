import { useMessage } from "./hooks/useMessage";
import Home from "./pages/Home";

function AppContainer() {
  useMessage();

  return <Home />;
}

export default AppContainer;
