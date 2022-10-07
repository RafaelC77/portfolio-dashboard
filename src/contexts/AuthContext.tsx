import { createContext, ReactNode, useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { api } from "../../services/api";

type User = {
  name: string;
  email: string;
  image: string;
};

type AuthContextData = {
  isAuthenticated: boolean;
  user: User;
  setUser(user: User): void;
};

export const AuthContext = createContext({} as AuthContextData);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const cookies = parseCookies();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
}
