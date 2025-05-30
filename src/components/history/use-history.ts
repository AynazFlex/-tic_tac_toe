import { useLayoutEffect, useState } from "react";
import type { IGameResult } from "../../store/use-game";

const useHistory = () => {
  const [history, setHistory] = useState<IGameResult[]>([]);

  useLayoutEffect(() => {
    const storedHistory = localStorage.getItem("gameResult");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  return history;
};

export default useHistory;
