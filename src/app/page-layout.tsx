import { Box, type BoxProps } from "@mui/material";
import type { FC } from "react";
import { Outlet } from "react-router";

const PageLayout: FC<BoxProps> = (props) => {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      <Outlet />
    </Box>
  );
};

export default PageLayout;
