import { AppProvider } from "./AppProvider";
import AppDrawer from "./components/AppDrawer";
import UsersTable from "./components/UsersTable";

function App() {
  return (
    <AppProvider>
      <UsersTable />
      <AppDrawer />
    </AppProvider>
  );
}

export default App;
