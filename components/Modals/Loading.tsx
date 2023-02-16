import React from "react";

import Spinner from "react-native-loading-spinner-overlay";

import { useAppSelector } from "../../hooks/useAppSelector";

export function LoadingModal() {
  const hint = useAppSelector((state) => state.loading.hint);
  const isOpened = useAppSelector((state) => state.loading.isOpened);

  return (
    <Spinner
      visible={isOpened}
      textContent={hint}
      textStyle={{ color: "#FFF", fontSize: 16 }}
      cancelable={false}
    />
  );
}
