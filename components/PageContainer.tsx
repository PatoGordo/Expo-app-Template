import Constants from "expo-constants";
import styled from "styled-components/native";

import { styled as nwstyled } from "nativewind";

export const PageContainer = nwstyled(styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
}))`
  margin-top: ${Constants.statusBarHeight}px;
  width: 100%;
  height: 100%;
  padding: 16px;
`);
