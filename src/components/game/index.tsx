import { type FC } from "react";
import { Stack } from "@mui/material";
import Title from "./title";
import GameScore from "./game-score";
import Board from "./board";
import GameMenu from "./game-menu";

const Game: FC = () => {
  return (
    <Stack spacing={1} alignItems="center">
      <Title />
      <GameScore />
      <Board />
      <GameMenu />
    </Stack>
  );
};

export default Game;
