import AppDrawer from "../components/AppDrawer";
import UsersTable from "../components/UsersTable";
import FrameWihtMui from "../components/FrameWihtMui";
import { useMessage } from "../hooks/useMessage";

function Home() {
  useMessage();
  return (
    <>
      <FrameWihtMui>
        <UsersTable />
      </FrameWihtMui>
      <AppDrawer />
    </>
  );
}

export default Home;
