import { Button, Card, Stack, TextField } from "@mui/material";
import type { FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useGame, type TypePlayersValues } from "../../store";

const Login: FC = () => {
  const setValues = useGame(({ setValues }) => setValues);

  const { register, handleSubmit, formState } = useForm<TypePlayersValues>({
    mode: "onChange",
    defaultValues: {
      player1: "",
      player2: "",
      size: 3,
    },
  });

  const onSubmit: SubmitHandler<TypePlayersValues> = (data) => {
    setValues({
      ...data,
      isAuth: true,
    });
  };

  return (
    <Card
      variant="outlined"
      sx={{
        width: 400,
        borderRadius: 2,
        padding: 2.5,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={1.5}>
          <TextField
            size="small"
            required
            label="Первый игрок (x)"
            fullWidth
            error={!!formState.errors.player1}
            helperText={
              formState.errors.player1
                ? "Имя должно быть не менее 3 символов"
                : ""
            }
            {...register("player1", { required: true, minLength: 3 })}
          />
          <TextField
            size="small"
            required
            label="Второй игрок (o)"
            fullWidth
            error={!!formState.errors.player2}
            helperText={
              formState.errors.player2
                ? "Имя должно быть не менее 3 символов"
                : ""
            }
            {...register("player2", { required: true, minLength: 3 })}
          />
          <TextField
            size="small"
            required
            label="Размер доски"
            fullWidth
            type="number"
            slotProps={{ htmlInput: { min: 3, max: 10 } }}
            error={!!formState.errors.size}
            helperText={formState.errors.size ? "мин 3x3" : ""}
            {...register("size", {
              required: true,
              min: 3,
              valueAsNumber: true,
            })}
          />
          <Button
            disabled={!formState.isValid}
            variant="contained"
            size="small"
            type="submit"
          >
            Начать
          </Button>
        </Stack>
      </form>
    </Card>
  );
};

export default Login;
