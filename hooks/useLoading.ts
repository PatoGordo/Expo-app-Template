import { useEffect, useState } from "react";

import { endLoading, startLoading } from "@store/reducers/loading";
import { useAppDispatch } from "./useAppSelector";

export const useLoading = () => {
  const [hint, setHint] = useState("");
  const [isOpened, setIsOpened] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOpened) {
      dispatch(startLoading(hint));
    } else {
      dispatch(endLoading());
    }
  }, [isOpened]);

  const start = (_hint: string) => {
    setHint(_hint);
    setIsOpened(true);
  };

  const end = () => {
    setIsOpened(false);
  };

  return { start, end };
};
