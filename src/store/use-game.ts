import { create } from "zustand";

interface IGameValues {
  player1?: string;
  player2?: string;
  size?: number;
  isAuth: boolean;
}

interface IGameBoard {
  board: Map<number, Map<number, "x" | "o">>;
  symbol?: "x" | "o";
}

export type TypePlayersValues = Omit<IGameValues, "isAuth">;

interface IGameActions {
  setValues: (values: IGameValues) => void;
  reset: () => void;
  setBoard: (x: number, y: number) => void;
  resetBoard: () => void;
}

export const useGame = create<IGameValues & IGameBoard & IGameActions>(
  (set) => ({
    isAuth: false,
    board: new Map(),
    //
    setValues: (values) => set(() => ({ ...values })),
    reset: () => set(() => ({ isAuth: false })),
    setBoard: (x, y) =>
      set((state) => {
        const newSymbol = state.symbol === "x" ? "o" : "x";
        const newBoard = new Map(state.board);
        const row = new Map(state.board.get(x) ?? new Map());
        row.set(y, newSymbol);
        newBoard.set(x, row);
        
        return { board: newBoard, symbol: newSymbol };
      }),
    resetBoard: () => set(() => ({
      board: new Map(),
      symbol: "x",
    })),
  })
);
