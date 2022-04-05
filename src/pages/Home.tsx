import AppDrawer from "../components/AppDrawer";
import useAppContext from "../hooks/useAppContext";

function Home() {
  const { setSelectedTab, setSelectedUserId, selectedTab, selectedUserId } =
    useAppContext();
  console.log("test", selectedTab);
  console.log({ selectedTab });
  return (
    <>
      <iframe src="/table" />
      <AppDrawer />
    </>
  );
}

export default Home;
