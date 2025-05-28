import { Chip, Divider, Typography } from "@mui/material";
import type { FC } from "react";
import { useGame } from "../../store";

const Title: FC = () => {
  const size = useGame(({ size }) => size);

  return (
    <>
      <Typography variant="h4" fontWeight={500}>
        Крестики нолики
      </Typography>
      <Divider
        sx={{
          width: "100%",
          maxWidth: 300
        }}
      >
        <Chip label={`${size} на ${size}`} size="small" />
      </Divider>
    </>
  );
};

export default Title;
