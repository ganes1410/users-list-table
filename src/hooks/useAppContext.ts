import { useContext } from "react";
import { AppContext } from "../AppProvider";

export default function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
}
