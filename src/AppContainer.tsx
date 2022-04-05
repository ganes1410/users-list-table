import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import useAppContext from "./hooks/useAppContext";
import { useMessage } from "./hooks/useMessage";
import Home from "./pages/Home";
import Table from "./pages/Table";
import { ISelectedTab } from "./types";

function AppContainer() {
  const { setSelectedTab, setSelectedUserId, selectedTab, selectedUserId } =
    useAppContext();
  console.log({
    setSelectedTab,
    setSelectedUserId,
    selectedTab,
    selectedUserId,
  });
  useEffect(() => {
    function onMessageReceivedFromIframe(event: any) {
      if (event.source === window) {
        try {
          // Ignore react devtools events
          if (!event.data?.source) {
            const parsedData = JSON.parse(event.data);
            console.log({ parsedData });
            setSelectedUserId(parsedData?.userId);
            setSelectedTab(parsedData?.type as ISelectedTab);
          }
        } catch (error) {
          console.log("Cannot parse data");
        }
      }
    }
    window.addEventListener("message", onMessageReceivedFromIframe);
    return () =>
      window.removeEventListener("message", onMessageReceivedFromIframe);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppContainer;
