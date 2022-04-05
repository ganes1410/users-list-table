import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { ISelectedUserId, ISelectedTab } from "./types";

type ContextProps = {
  selectedTab: ISelectedTab;
  selectedUserId: ISelectedUserId;
  setSelectedUserId: Dispatch<SetStateAction<ISelectedUserId>>;
  setSelectedTab: Dispatch<SetStateAction<ISelectedTab>>;
};

export const AppContext = createContext({} as ContextProps);

export function AppProvider({ children }: { children: ReactNode }) {
  const [selectedUserId, setSelectedUserId] = useState<ISelectedUserId>(null);
  const [selectedTab, setSelectedTab] = useState<ISelectedTab>(null);

  return (
    <AppContext.Provider
      value={{
        selectedTab,
        selectedUserId,
        setSelectedUserId,
        setSelectedTab,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
