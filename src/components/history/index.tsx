import { Stack } from "@mui/material";
import type { FC } from "react";
import Title from "./titile";
import List from "./list";

const History: FC = () => {
  return (
    <Stack spacing={1} alignItems="center" mt={4}>
      <Title />
      <List />
    </Stack>
  );
};

export default History;
