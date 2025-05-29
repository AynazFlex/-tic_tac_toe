import { Button, Grid } from "@mui/material";
import type { FC } from "react";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import CloseIcon from "@mui/icons-material/Close";
import { useGame } from "../../store";
import { blue, common, red, yellow } from "@mui/material/colors";

const Board: FC = () => {
  const size = useGame(({ size }) => size);
  const board = useGame(({ board }) => board);
  const setBoard = useGame(({ setBoard }) => setBoard);
  const winCells = useGame(({ winCells }) => winCells);
  const isGameOver = useGame(({ isGameOver }) => isGameOver);
  const buttonSize = 70;

  return (
    <Grid
      container
      spacing={1}
      columns={{ xs: size }}
      width={buttonSize * size + (size - 1) * 8}
    >
      {board.map((symbol, index) => {
        const isWinCell = winCells.includes(index);

        return (
          <Grid key={index}>
            <Button
              onClick={() => symbol || setBoard(index)}
              variant="outlined"
              disabled={Boolean(symbol) || isGameOver}
              key={index}
              size="small"
              sx={{
                width: buttonSize,
                height: buttonSize,
                padding: 0,
                fontSize: 40,
                color: common.black,
                backgroundColor: isWinCell ? yellow[400] : common.white,
              }}
            >
              {symbol === "x" ? (
                <CloseIcon
                  sx={{
                    color: red[500],
                    fontSize: buttonSize - 10,
                  }}
                />
              ) : symbol === "o" ? (
                <PanoramaFishEyeIcon
                  sx={{
                    color: blue[500],
                    fontSize: buttonSize - 10,
                  }}
                />
              ) : (
                ""
              )}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Board;
