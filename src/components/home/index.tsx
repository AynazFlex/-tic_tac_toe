import { Button, Stack, Typography } from "@mui/material";
import type { FC } from "react";
import { Link } from "react-router";

const Home: FC = () => {
  return (
    <Stack spacing={1}>
      <Typography fontSize={28} fontWeight={500} variant="h1">
        Крестики нолики
      </Typography>
      <Button variant="contained" size="medium" component={Link} to="/login">
        Начать игру
      </Button>
      <Button variant="contained" size="medium" component={Link} to="/history">
        История игр
      </Button>
    </Stack>
  );
};

export default Home;
