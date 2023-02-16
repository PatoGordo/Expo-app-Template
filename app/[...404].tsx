import React from "react";

import { useRouter } from "expo-router";

import { Button } from "@components/Form/Button";
import { PageContainer } from "@components/PageContainer";
import { Title } from "@components/Typography/Text";
import { useAppDispatch } from "@hooks/useAppSelector";
import { removeUser } from "@store/reducers/auth";

export default function Page404() {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const goHome = () => {
    dispatch(removeUser);

    router.push("/");
  };

  return (
    <PageContainer>
      <Title className="mb-4">404 - Página não encontrada!</Title>
      <Button onPress={goHome}>Voltar para o ínicio</Button>
    </PageContainer>
  );
}
