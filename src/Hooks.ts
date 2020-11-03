import { useEffect, useState } from "react";

export function useAsync<T>(prom: () => Promise<T>, def: T): T {
  const [state, setState] = useState<T>(def);
  useEffect(() => {
    prom()
      .then(setState)
      .catch(_ => setState(def))
  }, [state]);
  return state;
}