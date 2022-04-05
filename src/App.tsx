import AppContainer from "./AppContainer";
import { AppProvider } from "./AppProvider";

function App() {
  return (
    <AppProvider>
      <AppContainer />
    </AppProvider>
  );
}

export default App;
