import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import type { FC } from "react";
import { useGame } from "../../store";
import { blue, red } from "@mui/material/colors";

const GameScore: FC = () => {
  const player1 = useGame(({ player1 }) => player1);
  const player2 = useGame(({ player2 }) => player2);
  const winX = useGame(({ winX }) => winX);
  const winO = useGame(({ winO }) => winO);

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: 300,
      }}
    >
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Игрок</TableCell>
            <TableCell>Счет</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              sx={{
                color: red[500],
                fontWeight: 500,
              }}
            >
              {player1} (x)
            </TableCell>
            <TableCell>{winX}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                color: blue[500],
                fontWeight: 500,
              }}
            >
              {player2} (o)
            </TableCell>
            <TableCell>{winO}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GameScore;
