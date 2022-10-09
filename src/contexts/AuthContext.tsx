import { destroyCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import Router from "next/router";

type User = {
  name: string;
  email: string;
  image: string;
};

type AuthContextData = {
  isAuthenticated: boolean;
  user: User;
  setUser: (user: User) => void;
  signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextData);

type AuthProviderProps = {
  children: ReactNode;
};

let authChannel: BroadcastChannel;

export function signOut() {
  destroyCookie(null, "dashboard.token");
  authChannel.postMessage("signOut");

  Router.push("/");
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    authChannel = new BroadcastChannel("auth");

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case "signOut":
          Router.push("/");
          break;
        default:
          break;
      }
    };
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setUser, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
