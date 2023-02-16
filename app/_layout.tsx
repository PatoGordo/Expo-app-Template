import React from "react";

import { Slot } from "expo-router";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { LoadingModal } from "@components/Modals/Loading";
import { Provider as AuthProvider } from "@contexts/auth";
import { persistor, store } from "@store/index";

const LoadingMarkup = () => (
  <View style={styles.loadingMarkupStyle}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

export default function RootLayout() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<LoadingMarkup />} persistor={persistor}>
        <AuthProvider>
          <Slot />
          <LoadingModal />
        </AuthProvider>
      </PersistGate>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  loadingMarkupStyle: {
    flex: 1,
    justifyContent: "center",
  },
});
