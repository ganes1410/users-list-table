import { Box, Typography } from "@material-ui/core";
import { ReactNode } from "react";
import useAppContext from "../hooks/useAppContext";
import Loader from "./Loader";

function Card({
  children,
  title,
  isLoading,
}: {
  children: ReactNode;
  title: string;
  isLoading: boolean;
}) {
  const { setSelectedTab, setSelectedUserId } = useAppContext();
  return (
    <Box
      bgcolor={"#fff"}
      border={1}
      borderColor="darkgreen"
      borderRadius={8}
      width={300}
      maxHeight={"60vh"}
      overflow="auto"
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            bgcolor={"darkgreen"}
            color="#fff"
            px={2}
            py={1}
          >
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              {title}
            </Typography>
            <Box
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSelectedTab(null);
                setSelectedUserId(null);
              }}
            >
              <Typography variant="h4">&#8677;</Typography>
            </Box>
          </Box>
          <Box px={3} my={2}>
            {children}
          </Box>
        </>
      )}
    </Box>
  );
}

export default Card;
