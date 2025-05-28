import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router";
import PageLayout from "../page-layout";
import { PublicRoute } from "./public-route";
import { ProtectedRoute } from "./protected-route";
import { CircularProgress } from "@mui/material";

const Home = lazy(() => import("../../components/home"));
const Login = lazy(() => import("../../components/login"));
const Game = lazy(() => import("../../components/game"));
const History = lazy(() => import("../../components/history"));

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: (
          <PublicRoute>
            <Suspense fallback={<CircularProgress />}>
              <Home />
            </Suspense>
          </PublicRoute>
        ),
      },
      {
        path: "login",
        element: (
          <PublicRoute>
            <Suspense fallback={<CircularProgress />}>
              <Login />
            </Suspense>
          </PublicRoute>
        ),
      },
      {
        path: "game",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<CircularProgress />}>
              <Game />
            </Suspense>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "history",
    element: (
      <Suspense
        fallback={
          <PageLayout>
            <CircularProgress />
          </PageLayout>
        }
      >
        <History />
      </Suspense>
    ),
  },
];
