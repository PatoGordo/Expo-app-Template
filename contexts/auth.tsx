import React from "react";

import { useRouter, useSegments } from "expo-router";

import { useAppDispatch, useAppSelector } from "@hooks/useAppSelector";
import { removeUser, setUser } from "@store/reducers/auth";
import { User } from "#types/User";

const AuthContext = React.createContext(null);

export function useAuth() {
  return React.useContext(AuthContext);
}

function useProtectedRoute(user: User) {
  const rootSegment = useSegments()[0];
  const router = useRouter();

  React.useEffect(() => {
    if (!user) {
      router.replace("/sign-in");
    } else if (user) {
      router.replace("/");
    }
  }, [user, rootSegment]);
}

export function Provider(props: any) {
  const user = useAppSelector((state) => state.auth.auth.user);

  const dispatch = useAppDispatch();

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          setUser(null);
          dispatch(removeUser());
        },
        signOut: () => {
          setUser(null);
          dispatch(removeUser());
        },
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
