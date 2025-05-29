import { create } from "zustand";

interface IGameValues {
  player1?: string;
  player2?: string;
  size: number;
  isAuth: boolean;
}

interface IGameBoard {
  board: ("x" | "o" | null)[];
  symbol?: "x" | "o";
  countX: number;
  countO: number;
  winCells: number[];
  winX: number;
  winO: number;
  isGameOver: boolean;
}

export type TypePlayersValues = Omit<IGameValues, "isAuth">;

interface IGameActions {
  setValues: (values: IGameValues) => void;
  reset: () => void;
  setBoard: (index: number) => void;
  resetBoard: () => void;
}

type WinnerResult = {
  winner: "x" | "o";
  winCells: number[];
} | null;

const checkWinner = (
  board: ("x" | "o" | null)[],
  size: number
): WinnerResult => {
  const directions = [
    { dx: 1, dy: 0 },
    { dx: 0, dy: 1 },
    { dx: 1, dy: 1 },
    { dx: -1, dy: 1 },
  ];

  const winLength = size < 5 ? size : 5;

  const inBounds = (x: number, y: number) =>
    x >= 0 && y >= 0 && x < size && y < size;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const startIndex = y * size + x;
      const symbol = board[startIndex];
      if (!symbol) continue;

      for (const { dx, dy } of directions) {
        const winCells = [startIndex];

        for (let i = 1; i < winLength; i++) {
          const nx = x + dx * i;
          const ny = y + dy * i;
          if (!inBounds(nx, ny)) break;

          const nextIndex = ny * size + nx;
          if (board[nextIndex] !== symbol) break;

          winCells.push(nextIndex);
        }

        if (winCells.length === winLength) {
          return { winner: symbol as "x" | "o", winCells };
        }
      }
    }
  }

  return null;
};

export const useGame = create<IGameValues & IGameBoard & IGameActions>(
  (set) => ({
    isAuth: false,
    board: [],
    countO: 0,
    countX: 0,
    size: 3,
    winX: 0,
    winO: 0,
    winCells: [],
    isGameOver: false,
    //
    setValues: (values) =>
      set(() => ({
        ...values,
        board: Array(values.size * values.size).fill(null),
      })),
    reset: () => set(() => ({ isAuth: false })),
    setBoard: (index) =>
      set((state) => {
        const symbol = state.symbol === "x" ? "o" : "x";
        const countX = symbol === "x" ? state.countX + 1 : state.countX;
        const countO = symbol === "o" ? state.countO + 1 : state.countO;
        //
        const board = [...state.board];
        board[index] = symbol;
        const result = checkWinner(board, state.size);
        const winner = result?.winner;
        const winCells = result?.winCells || [];
        const winX = winner === "x" ? state.winX + 1 : state.winX;
        const winO = winner === "o" ? state.winO + 1 : state.winO;
        //
        if (result) {
          setTimeout(() => {
            set((s) => ({
              board: [...s.board].fill(null),
              symbol: undefined,
              countX: 0,
              countO: 0,
              winCells: [],
              isGameOver: false,
            }));
          }, 3000);
        }
        //
        return {
          board,
          symbol,
          countX,
          countO,
          winCells,
          winX,
          winO,
          isGameOver: Boolean(winner),
        };
      }),
    resetBoard: () =>
      set((state) => ({
        board: [...state.board].fill(null),
        symbol: undefined,
        countX: 0,
        countO: 0,
        winCells: [],
        isGameOver: false,
      })),
  })
);
