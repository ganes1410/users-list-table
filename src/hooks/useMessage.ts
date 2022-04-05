import { useEffect } from "react";
import { ISelectedTab } from "../types";
import useAppContext from "./useAppContext";

// Listener for postMessage events
export function useMessage() {
  const { setSelectedTab, setSelectedUserId, selectedTab, selectedUserId } =
    useAppContext();

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
  return null;
}
