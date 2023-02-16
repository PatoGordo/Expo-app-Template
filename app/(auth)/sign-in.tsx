import React from "react";

import { createRef, useState } from "react";
import { TextInput } from "react-native";
import { useDispatch } from "react-redux";
import Checkbox from "expo-checkbox";

import { Button, Touchable } from "@components/Form/Button";
import { Input } from "@components/Form/Input";
import { PageContainer } from "@components/PageContainer";
import { Text, Title } from "@components/Typography/Text";
import { useLoading } from "@hooks/useLoading";
import { api } from "@services/api";
import { setUser } from "@store/reducers/auth";
import { useAppSelector } from "@hooks/useAppSelector";

export default function SignIn() {
  const { start, end } = useLoading();
  const dispatch = useDispatch();

  const savedEmail = useAppSelector((state) => state.auth.auth.savedEmail);

  const [email, setEmail] = useState(savedEmail);
  const [password, setPassword] = useState("");
  const [rememberEmail, setRememberEmail] = useState(savedEmail !== "");

  const passwordRef = createRef<TextInput>();

  const handleSubmit = async () => {
    start("Entrando...");

    try {
      const res = await api.post("/auth/sign-in", {
        email,
        password,
      });

      end();

      dispatch(setUser({ ...res.data.result, rememberEmail }));
    } catch (err) {
      end();
    }
  };

  return (
    <PageContainer className="p-8 h-full w-full my-auto top-1/3">
      <Title className="mb-8 text-3xl">Iniciar sessão</Title>

      <Input
        label="Seu email"
        placeholder="Digite aqui seu email..."
        autoCapitalize="none"
        className="mb-4"
        onChangeText={(text) => setEmail(text)}
        value={email}
        onSubmitEditing={() => passwordRef.current.focus()}
      />

      <Input
        label="Sua senha"
        placeholder="Digite aqui sua senha..."
        autoCapitalize="none"
        className="mb-4"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
        onSubmitEditing={() =>
          email.trim() === "" || (password.trim() === "" && password.length < 6)
            ? handleSubmit()
            : null
        }
        inputRef={passwordRef}
      />

      <Touchable
        color="transparent"
        onPress={() => setRememberEmail(!rememberEmail)}
        className="flex flex-row items-center justify-start gap-2"
      >
        <Checkbox
          value={rememberEmail}
          onValueChange={(value) => setRememberEmail(value)}
        />
        <Text>Lembrar do email</Text>
      </Touchable>

      <Button
        className="w-1/3 self-end rounded-md"
        disabled={
          email.trim() === "" || password.trim() === "" || password.length < 6
        }
        onPress={handleSubmit}
      >
        Entrar
      </Button>
    </PageContainer>
  );
}
