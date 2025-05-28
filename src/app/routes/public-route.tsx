import type { FC, PropsWithChildren } from "react";
import { useGame } from "../../store";
import { Navigate } from "react-router";

export const PublicRoute: FC<PropsWithChildren> = ({ children }) => {
  const isAuth = useGame(({ isAuth }) => isAuth);

  return !isAuth ? <>{children}</> : <Navigate to="/game" replace />;
};
