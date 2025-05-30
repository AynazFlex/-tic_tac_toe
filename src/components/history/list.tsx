import { type FC } from "react";
import {
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import CloseIcon from "@mui/icons-material/Close";
import { blue, common, red, yellow } from "@mui/material/colors";
import useHistory from "./use-history";

const List: FC = () => {
  const history = useHistory();
  const cellSize = 40;

  if (history.length === 0) {
    return <Typography variant="subtitle1">История игр пуста</Typography>;
  }

  return (
    <>
      {history.map((item) => (
        <Paper
          elevation={3}
          sx={{
            padding: 1,
          }}
          key={item.date}
        >
          <Stack spacing={1} alignItems="center">
            <Divider
              sx={{
                width: "100%",
              }}
            >
              <Chip label={item.date} size="medium" />
            </Divider>
            <Typography fontSize={18} fontWeight={400}>
              {item.player1} (x) - {item.player2} (o)
            </Typography>
            <Typography fontSize={16} fontWeight={500}>
              {item.winner === "x"
                ? `${item.player1} выиграл`
                : item.winner === "o"
                ? `${item.player2} выиграл`
                : "Ничья"}
            </Typography>
            <Grid
              container
              spacing={0.5}
              columns={{ xs: item.size }}
              width={cellSize * item.size + (item.size - 1) * 4}
            >
              {item.board.map((symbol, index) => {
                const isWinCell = item.winCells.includes(index);

                return (
                  <Box
                    key={index}
                    sx={{
                      width: cellSize,
                      height: cellSize,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: isWinCell ? yellow[400] : common.white,
                      border: `1px solid ${blue[700]}`,
                      borderRadius: 1,
                    }}
                  >
                    {symbol === "x" ? (
                      <CloseIcon
                        sx={{
                          color: red[500],
                          fontSize: cellSize - 10,
                        }}
                      />
                    ) : symbol === "o" ? (
                      <PanoramaFishEyeIcon
                        sx={{
                          color: blue[500],
                          fontSize: cellSize - 10,
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </Box>
                );
              })}
            </Grid>
          </Stack>
        </Paper>
      ))}
    </>
  );
};

export default List;
