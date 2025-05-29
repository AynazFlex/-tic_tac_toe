import { Chip, Divider, Typography } from "@mui/material";
import type { FC } from "react";
import { useGame } from "../../store";

const Title: FC = () => {
  const size = useGame(({ size }) => size);
  const countX = useGame(({ countX }) => countX);
  const countO = useGame(({ countO }) => countO);

  return (
    <>
      <Typography variant="h4" fontWeight={500}>
        Крестики нолики
      </Typography>
      <Divider
        sx={{
          width: "100%",
          maxWidth: 300,
        }}
      >
        <Chip label={`${size} на ${size}`} size="small" />
      </Divider>
      <Typography>
        x={countX} и o={countO}
      </Typography>
    </>
  );
};

export default Title;
