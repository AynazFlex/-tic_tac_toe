import { Box, Button } from "@mui/material";
import type { FC } from "react";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import CloseIcon from "@mui/icons-material/Close";
import { useGame } from "../../store";
import { blue, common, red } from "@mui/material/colors";

const Board: FC = () => {
  const size = useGame(({ size }) => size);
  const board = useGame(({ board }) => board);
  const setBoard = useGame(({ setBoard }) => setBoard);

  return (
    <Box display="flex" gap={0.2} flexDirection="column">
      {Array.from(Array(size)).map((_, x) => {
        return (
          <Box key={x} display="flex" gap={0.2}>
            {Array.from(Array(size)).map((_, y) => {
              const symbol = board.get(x)?.get(y);

              return (
                <Button
                  onClick={() => symbol || setBoard(x, y)}
                  variant="outlined"
                  key={`${x}_${y}`}
                  size="small"
                  sx={{
                    width: 70,
                    height: 70,
                    padding: 0,
                    fontSize: 40,
                    color: common.black,
                  }}
                >
                  {symbol === "x" ? (
                    <CloseIcon
                      sx={{
                        color: red[500],
                        fontSize: 60,
                      }}
                    />
                  ) : symbol === "o" ? (
                    <PanoramaFishEyeIcon
                      sx={{
                        color: blue[500],
                        fontSize: 60,
                      }}
                    />
                  ) : (
                    ""
                  )}
                </Button>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export default Board;
