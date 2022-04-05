import {
  Box,
  Drawer,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { CURRENT_USER_ID, DRAWER_ITEMS } from "../constants";
import useAppContext from "../hooks/useAppContext";
import { ISelectedTab } from "../types";
import Posts from "./Posts";
import UserProfile from "./UserProfile";

const drawerWidth = 150;

const useStyles = makeStyles(() => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
    marginTop: "30px",
  },
}));

function CurrentTabCompoent({
  userId,
  currentTab,
}: {
  userId: number;
  currentTab: ISelectedTab;
}) {
  if (!currentTab) return null;

  return currentTab === "profile" ? (
    <UserProfile userId={userId} />
  ) : (
    <Posts userId={userId} />
  );
}

function AppDrawer() {
  const classes = useStyles();
  const { selectedTab, selectedUserId, setSelectedTab, setSelectedUserId } =
    useAppContext();

  return (
    <>
      <Box position="fixed" right={drawerWidth + 5} top={10}>
        {selectedUserId ? (
          <CurrentTabCompoent
            userId={selectedUserId}
            currentTab={selectedTab}
          />
        ) : null}
      </Box>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.drawerContainer}>
          <List>
            {DRAWER_ITEMS.map((sideBarItem) => {
              return (
                <ListItem
                  button
                  key={sideBarItem.key}
                  style={{
                    height: "50px",
                  }}
                  alignItems="center"
                  onClick={() => {
                    setSelectedUserId(CURRENT_USER_ID);
                    setSelectedTab(sideBarItem.key as ISelectedTab);
                  }}
                >
                  <Typography variant="body1">{sideBarItem.label}</Typography>
                </ListItem>
              );
            })}
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default AppDrawer;
