import { AppProvider } from "./AppProvider";
import Home from "./pages/Home";

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
