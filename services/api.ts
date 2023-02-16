import axios, { AxiosResponse } from "axios";
import { Alert } from "react-native";

export const api = axios.create({
  baseURL: "https://nitro-api-template.netlify.app/api",
  params: {
    lang: "pt",
  },
});

api.interceptors.response.use(
  (res) => res,
  async (res) => {
    const { status, data } = res.response as AxiosResponse;

    if (status === 401) {
      return Alert.alert(
        "Sua sessão expirou!",
        "Faça login para continuar usando!"
      );
    }

    Alert.alert("Um erro inesperado aconteceu!", data.message);

    return res;
  }
);
