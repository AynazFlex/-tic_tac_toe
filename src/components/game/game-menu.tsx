import { Button, Stack } from "@mui/material";
import type { FC } from "react";
import { useGame } from "../../store";

const GameMenu: FC = () => {
  const reset = useGame(({ reset }) => reset);
  const resetBoard = useGame(({ resetBoard }) => resetBoard);

  return (
    <Stack direction="row" spacing={1}>
      <Button variant="contained" size="small" onClick={resetBoard}>
        Сбросить игру
      </Button>
      <Button variant="contained" size="small" onClick={reset} color="error">
        Завершить игру
      </Button>
    </Stack>
  );
};

export default GameMenu;
