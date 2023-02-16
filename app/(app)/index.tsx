import React from "react";

import { Alert, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { PageContainer } from "@components/PageContainer";
import { Title } from "@components/Typography/Text";
import { useAppDispatch } from "@hooks/useAppSelector";
import { removeUser } from "@store/reducers/auth";

export default function HomePage() {
  const dispatch = useAppDispatch();

  const signOut = () => {
    Alert.alert(
      "Você deseja encerrar sua sessão?",
      "Será necessário realizar login para entrar novamente.",
      [
        {
          text: "Cancelar",
        },
        {
          text: "Encerrar sessão",
          onPress: () => {
            dispatch(removeUser());
          },
        },
      ]
    );
  };

  return (
    <PageContainer>
      <View className="flex flex-row items-center justify-between w-full">
        <Title className="bg-blue=500">Home</Title>
        <MaterialIcons
          name="logout"
          size={24}
          color="black"
          suppressHighlighting={true}
          onPress={signOut}
        />
      </View>
    </PageContainer>
  );
}
