import { CircularProgress, Box, Typography } from "@material-ui/core";

function Loader({ loaderText = "Please Wait" }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      height={200}
      justifyContent="center"
      width={1}
    >
      <CircularProgress size={40} />
      <Box marginTop={3}>
        <Typography variant="body1">{loaderText}</Typography>
      </Box>
    </Box>
  );
}

export default Loader;
